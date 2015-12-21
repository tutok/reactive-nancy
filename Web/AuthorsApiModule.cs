using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Nancy;
using Nancy.Responses;

namespace Web
{
    public class ApiModule : NancyModule
    {
        public ApiModule(string path) : base("/api" + path)
        {
        }

        public ApiModule() : this(string.Empty)
        {
        }
    }

    public class AuthorsApiModule : ApiModule
    {
        public AuthorsApiModule() : base("/authors")
        {
            Get["/"] = parameters => new JsonResponse(_data, new DefaultJsonSerializer());

            Get["/{id}"] = parameters =>
                new JsonResponse(_data.Where(x => x.Id == parameters.id), new DefaultJsonSerializer());

            //Put["/"]
            //saveAuthor: function(author) {
            //               //pretend an ajax call to web api is made here
            //               console.log('Pretend this just saved the author to the DB via AJAX call...');

            //               if (author.id)
            //               {
            //                   var existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id}));
            //                   authors.splice(existingAuthorIndex, 1, author);
            //               }
            //               else {
            //                   //Just simulating creation here.
            //                   //The server would generate ids for new authors in a real app.
            //                   //Cloning so copy returned is passed by value rather than by reference.
            //                   author.id = _generateId(author);
            //                   authors.push(author);
            //               }

            //               return _clone(author);
            //           },

            Delete["/{id}"] = parameters =>
            {
                Debug.WriteLine("Pretend this just deleted the author from the DB via an AJAX call...");
                _data.Remove(_data.SingleOrDefault(x => x.Id == parameters.id));

                return HttpStatusCode.OK;
            };
        }

        private IList<Author> _data = new[]
        {
            new Author
            {
                Id = 0,
                FirstName = "Cory",
                LastName = "House"
            },
            new Author
            {
                Id = 1,
                FirstName = "Scot",
                LastName = "Allen"
            },
            new Author
            {
                Id = 2,
                FirstName = "Dan",
                LastName = "Wahlin"
            }
        };

    }

    public class Author
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}