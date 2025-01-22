using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using UserManagerAPI.Models;

namespace UserManagerAPI.Database
{
    public class UserManagerContext: DbContext
    {
        public DbSet<Users> Users { get; set; }
        public UserManagerContext() : base("name=UserManagerContext") { }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}