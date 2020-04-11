using GA.Promo.Api.Context;
using GA.Promo.Api.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GA.Promo.Api.Hubs
{
    public class PromoHub : Hub
    {
        private Database _db;

        public PromoHub(Database db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Promotion>> GetPromotions()
        {
            return _db.Promotion.ToList();
        }

        public async Task<bool> RegisterPromotion(Promotion promotion)
        {
            _db.Promotion.Add(promotion);
            int rows = await _db.SaveChangesAsync();

            if (rows > 0)
            {
                var promotions = _db.Promotion.ToList();
                await Clients.Others.SendAsync("NewPromotions");
                await Clients.Others.SendAsync("PromotionsConstruct", promotions);

                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task SelectPromotion(int id)
        {
            _db.Promotion.Remove(_db.Promotion.First(x => x.Id == id));
            int rows = await _db.SaveChangesAsync();

            if (rows > 0)
            {
                var promotions = _db.Promotion.ToList();
                await Clients.All.SendAsync("PromotionsConstruct", promotions);
            }
        }
    }
}
