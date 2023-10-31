fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c7d4c9b492b5ab4248a89ff7d5f40d01')
    .then(response => response.json())
    .then(data => {
        
        let div = document.getElementById('container');

        data.results.forEach(movie => {

            // Image Parent
            let ParentImage = document.createElement('div');
            ParentImage.className = "ParentImg";
            
            // Image
            let img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = "no";
            ParentImage.appendChild(img);
            
            // Layer
            let layer = document.createElement('div');
            layer.className = "overlay";
            ParentImage.appendChild(layer);

            // Content 
            let content = document.createElement('div');
            content.className = "layerContent";
            layer.appendChild(content);

            // Header
            let head = document.createElement('h2');
            head.className = "movieTitle";
            head.innerHTML = movie.title;
            content.appendChild(head);

            // Icon + Text Parent
            let Parent = document.createElement('div');
            Parent.className = "IconTextParent";
            content.appendChild(Parent);

            // ratingParent
            let RatingParent = document.createElement('div');
            RatingParent.className = "ratingParent";
            Parent.appendChild(RatingParent);

            // popularity Parent
            let PopularityParent = document.createElement('div');
            PopularityParent.className = "popularityParent";
            Parent.appendChild(PopularityParent);

            // Date Parent
            let DateParent = document.createElement('div');
            DateParent.className = "dateParent";
            Parent.appendChild(DateParent);


            // Rate Icon
            let rateIcon = document.createElement('span');
            rateIcon.className = "rateIcon";
            rateIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="ipc-icon ipc-icon--star sc-bde20123-4 ggvDm" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>';
            RatingParent.appendChild(rateIcon);

            // Movie's Rating Text 
            let p1 = document.createElement('p');
            p1.className = "movieRating";
            p1.innerHTML = movie.vote_average + "/10";
            RatingParent.appendChild(p1);
    
            // Popularity Icon
            let popularityIcon = document.createElement('span');
            popularityIcon.className = "popularityIcon";
            popularityIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="ipc-icon ipc-icon--popularity-up sc-5f7fb5b4-3 hSsfDN" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.6 0-5-1.3-6.4-3.3l2.8-3.4 1.3 1.5c.4.4 1 .4 1.3 0l2.9-3.2 1.3 1.4c.3.3.8.1.8-.3V8.5c0-.3-.2-.5-.5-.5h-4c-.4 0-.6.5-.3.8l1.3 1.4-2.2 2.5L9 11.3c-.4-.4-1-.4-1.3 0L4.6 15c-.4-.9-.6-1.9-.6-3 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"></path></svg>';
            PopularityParent.appendChild(popularityIcon);

            // Movie's Popularity Text
            let p2 = document.createElement('p');
            p2.className = "moviePopularity";
            p2.innerHTML = movie.popularity;
            PopularityParent.appendChild(p2);

            // Movie's Date Text
            let p3 = document.createElement('p');
            p3.className = "movieDate";
            p3.innerHTML = movie.release_date;
            DateParent.appendChild(p3);
            
            div.appendChild(ParentImage);

            ParentImage.addEventListener("click", function () {
                window.location.href = "https://www.themoviedb.org/movie/926393-the-equalizer-3";
            })

        });    

    });


