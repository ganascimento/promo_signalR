using GA.Promo.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GA.Promo.Api.Context
{
    public class Database : DbContext
    {
        public Database(DbContextOptions<Database> option) : base(option)
        {

        }

        public DbSet<Promotion> Promotion { get; set; }
    }
}
