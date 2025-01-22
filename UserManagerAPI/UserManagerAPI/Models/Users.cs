using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using UserManagerAPI.UserManager;

namespace UserManagerAPI.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        [Column("passwd_hash")]
        public byte[] PasswdHash { get; set; }
        [Column("passwd_salt")]
        public byte[] PasswdSalt { get; set; }
        public DateTime BirthDate { get; set; }
        public bool Sex { get; set; }

        public Users() { }
        public Users(string name, string email, string passwd, DateTime birthDate, bool sex)
        {
            Name = name;
            Email = email;
            PasswordManager.CreatePasswordHash(passwd, out byte[] hash, out byte[] salt);
            PasswdHash = hash;
            PasswdSalt = salt;
            BirthDate = birthDate;
            Sex = sex;
        }
    }
}