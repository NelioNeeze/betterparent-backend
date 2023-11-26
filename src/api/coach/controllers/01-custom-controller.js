'use strict';

module.exports = {

  async findCoachingsByAuthor(ctx) {
    const { coachId } = ctx.params;

    try {
      // Find the author by their ID
      const coach = await strapi.db
      .query('api::coach.coach')
      .findOne({ 
        where: { 
          id: coachId 
        }, 
        populate: { 
          courses: {
            populate: {
              Image: true
            }
          },
        }, 
      });

      console.log(coach)

      if (!coach) {
        ctx.throw(404, 'Coach not found');
      }

      // Access the associated coachings through the relation
      const courses = coach.courses || [];

      ctx.send(courses);
    } catch (err) {
      ctx.throw(500, 'Internal Server Error', { originalError: err });
    }
  },

  async findBlogsByAuthor(ctx) {
    const { coachId } = ctx.params;

    try {
      // Find the author by their ID
      const coach = await strapi.db
      .query('api::coach.coach')
      .findOne({ 
        where: { 
          id: coachId 
        }, 
        populate: { 
          blogs: {
            populate: {
              Image: true
            }
          },
        }, 
      });

      console.log(coach)

      if (!coach) {
        ctx.throw(404, 'Coach not found');
      }

      // Access the associated coachings through the relation
      const blogs = coach.blogs || [];

      ctx.send(blogs);
    } catch (err) {
      ctx.throw(500, 'Internal Server Error', { originalError: err });
    }
  },
  
};


/*
'use strict';

module.exports = {
  async findCoachingsByAuthor(ctx) {
    const { coachId } = ctx.params;

    try {
      // Find the author by their ID
      const coach = await strapi.db
      .query('api::coach.coach')
      .findOne({ 
        where: { 
          id: coachId 
        }, 
        populate: { 
          courses: true,
        }, 
      });

      console.log(coach)

      if (!coach) {
        ctx.throw(404, 'Coach not found');
      }

      // Access the associated coachings through the relation
      const courses = coach.courses || [];

      ctx.send(courses);
    } catch (err) {
      ctx.throw(500, 'Internal Server Error', { originalError: err });
    }
  },
};
*/