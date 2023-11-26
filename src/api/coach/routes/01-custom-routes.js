'use strict';

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/coaches/:coachId/courses",
            handler: "01-custom-controller.findCoachingsByAuthor",
        },
        {
            method: "GET",
            path: "/coaches/:coachId/blogs",
            handler: "01-custom-controller.findBlogsByAuthor",
        }
    ]
};