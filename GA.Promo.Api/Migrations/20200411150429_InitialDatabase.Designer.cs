﻿// <auto-generated />
using GA.Promo.Api.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace GA.Promo.Api.Migrations
{
    [DbContext(typeof(Database))]
    [Migration("20200411150429_InitialDatabase")]
    partial class InitialDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("GA.Promo.Api.Models.Promotion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Company");

                    b.Property<string>("Description");

                    b.Property<decimal>("Value");

                    b.HasKey("Id");

                    b.ToTable("Promotion");
                });
#pragma warning restore 612, 618
        }
    }
}