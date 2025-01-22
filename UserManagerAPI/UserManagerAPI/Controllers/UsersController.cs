using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using UserManagerAPI.Database;
using UserManagerAPI.Models;
using UserManagerAPI.UserManager;

namespace UserManagerAPI.Controllers
{
    public class UsersRequestModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Passwd { get; set; }
        public DateTime BirthDate { get; set; }
        public bool Sex { get; set; }
    }
    public class UsersResponseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public bool Sex { get; set; }

        public UsersResponseModel(Users user)
        {
            Id = user.Id;
            Name = user.Name;
            Email = user.Email;
            BirthDate = user.BirthDate;
            Sex = user.Sex;
        }
    }

    public class AuthenticationModel
    {
        public string Email { get; set; }
        public string Passwd { get; set; }
    }
    public class UsersController : ApiController
    {
        // GET api/<controller>
        UserManagerContext ctx;

        [ResponseType(typeof(UsersResponseModel))]
        public HttpResponseMessage Get()
        {
            using (ctx = new UserManagerContext())
            {
                var res = ctx.Users.ToList();
                var response = new List<UsersResponseModel>();

                foreach(var item in res)
                {
                    response.Add(new UsersResponseModel(item));
                }

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
        }

        // GET api/<controller>/5
        [ResponseType(typeof(UsersResponseModel))]
        public HttpResponseMessage Get(int id)
        {
            using (ctx = new UserManagerContext())
            {
                var result = ctx.Users.Where(x => x.Id == id).FirstOrDefault();
                if (result != null)
                {
                    var response = new UsersResponseModel(result);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }

        // POST api/<controller>
        [ResponseType(typeof(UsersResponseModel))]
        public HttpResponseMessage Post([FromBody] UsersRequestModel value)
        {
            
            using (ctx = new UserManagerContext())
            {
                try
                {
                    var email = ctx.Users.Where(x => x.Email == value.Email).FirstOrDefault();

                    if (email != null)
                        return Request.CreateResponse(HttpStatusCode.Conflict, "EMAIL_EXISTS");
                    var res = ctx.Users.Add(new Users
                        (value.Name, value.Email, value.Passwd, value.BirthDate, value.Sex));
                    var response = new UsersResponseModel(res);

                    ctx.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                catch (Exception ex)
                {
                    return Request.CreateResponse(HttpStatusCode.InternalServerError, $"{ex.Message}");
                }
                
            }
        }

        // PUT api/<controller>/5
        [ResponseType(typeof(UsersResponseModel))]
        public HttpResponseMessage Put(int id, [FromBody] UsersRequestModel value)
        {
            using (ctx = new UserManagerContext())
            {
                try
                {
                    var email = ctx.Users.Where(x => x.Email == value.Email).FirstOrDefault();

                    if (email != null)
                        return Request.CreateResponse(HttpStatusCode.Conflict, "EMAIL_EXISTS");

                    var result = ctx.Users.Where(x => x.Id == id).FirstOrDefault();
                    if (result == null)
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound);
                    }

                    result.Name = value.Name;
                    result.Email = value.Email;
                    PasswordManager.CreatePasswordHash(value.Passwd, out byte[] hash, out byte[] salt);
                    result.PasswdHash = hash;
                    result.PasswdSalt = salt;
                    result.BirthDate = value.BirthDate;
                    result.Sex = value.Sex;

                    var response = new UsersResponseModel(result);

                    ctx.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                catch (Exception ex)
                {
                    return Request.CreateResponse(HttpStatusCode.InternalServerError, $"{ex.Message}");
                }
            }
        }

        // DELETE api/<controller>/5
        [ResponseType(typeof(UsersResponseModel))]
        public HttpResponseMessage Delete(int id)
        {
            using (ctx=new UserManagerContext())
            {
                var result = ctx.Users.Where(x => x.Id == id).FirstOrDefault();
                if (result != null)
                {
                    ctx.Users.Remove(result);
                    ctx.SaveChanges();
                    var response = new UsersResponseModel(result);
                    return Request.CreateResponse(HttpStatusCode.OK, result);
                }
                return Request.CreateResponse(HttpStatusCode.NotFound);

            }
        }

        [HttpPost]
        [Route("api/Users/authenticate")]
        [ResponseType(typeof(UsersResponseModel))]
        public HttpResponseMessage Authenticate([FromBody] AuthenticationModel value)
        {
            using(ctx = new UserManagerContext())
            {
                var result = ctx.Users.Where(x => x.Email == value.Email).FirstOrDefault();
                if (result != null)
                {
                    var valid = PasswordManager.VerifyPasswordHash(value.Passwd, result.PasswdHash, result.PasswdSalt);
                    var response = new UsersResponseModel(result);

                    if (valid)
                        return Request.CreateResponse(HttpStatusCode.OK, response);
                    else
                        return Request.CreateResponse(HttpStatusCode.Unauthorized, response);

                }
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }
    }
}