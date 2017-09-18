const { clans } = require('../../../lib/bungie');
const Clan = require('../../../models/Clan');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/clans',
    handler(request, reply) {
      Clan.find({}, (err, docs) => {
        reply({
          clans: docs,
        });
      });
    },
  },
  {
    method: 'GET',
    path: '/api/v1/clans/{clanId}/members',
    handler(request, reply) {
      clans.members(2072048).then((res) => {
        reply(res.data);
      });
    },
  },
  {
    method: 'GET',
    path: '/api/v1/clans/fetchByName',
    handler(req, reply) {
      clans.getByName(req.query.name).then((res) => {
        reply(res.data);
      }).catch(err => reply(err));
    },
  },
  {
    method: 'POST',
    path: '/api/v1/clans',
    handler(req, reply) {
      if (req.payload.bungieGroupId) {
        clans.show(req.payload.bungieGroupId).then((res) => {
          reply(res.data);

          const { detail, founder } = res.data.Response;

          const clan = new Clan({
            bungieGroupId: Number(detail.groupId),
            name: detail.name,
            motto: detail.motto,
          });

          clan.save((err) => {
            reply(clan);
          });
        });
      } else {
        reply({}).code(204);
      }
      // clan.save((err) => {
      //   reply(clan);
      // });
    },
  },
  {
    method: 'DELETE',
    path: '/api/v1/clans/{id}',
    handler(req, reply) {
      Clan.remove({
        _id: req.params.id,
      }, (err) => {
        reply(err);
      });
    },
  },
];
