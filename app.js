var shop = [
    {title: 'Samoyed',
      image: './images/samoyed.jpeg',
      price: '150.00-130,00',
      description:' 8 weeks old and are ready to go to their forever homes!They are very playful and friendly,and love to cuddle. They are up to date on their shots and have been dewormed.'
    },

    {
      
      image: './images/poodle-the-poodle-the-dog-breed_910x.jpeg',
      price: '$25.00-$13.99',title: 'Poodle',
      description: "Looking for a small, hypoallergenic,and intelligent pup? Then a puppy poodle is the right choice for you!Poodles are bred in a variety of sizes,but all poodles have curly hair that doesn't shed."
    },
    {
      title: 'German Shepherd',
      image: './images/german shepard.jpeg',
      price: '7,500-$12,000',
      description:'Our German Shepherd Puppies are 8 weeks old and are ready to join their forever homes! They have been vet checked, microchipped and have had their first set of shots.'
    },
    {
      title: 'French Bulldog',
      image: './images/tonge.jpeg',
      price: '35.00-$25.00',
      description: 'This American Pit bull puppy is a friendly and playful pup that will make a great addition to any family. He is full of energy and loves to play, but is also very affectionate and loving.' 
    },
    {
      title: 'Doberman',
      image: './images/doberman1.jpeg',
      price: '4,500-$7,900',
      description:' They are a friendly and playful pup that loves to cuddle. This Doberman Pinscher is loyal and will make a great guard dog. They are up to date on their shots and deworming.'
    },
    {
       title: 'Bull Dog',
      image: './images/bull dog.jpeg',
      price: '7,500-$15,000',
      description: "This little guy is an 8 week old Bulldog puppy who is full of spunk and energy! He loves to play and have a good time, but he also knows how to relax and cuddle up when it's time to wind down."
    },
    {
      title: 'American Pit Bull',
      image: './images/american pitbull.jpeg',
      price: '3,500-$5,500',
      description:"Our American pit bull is a 3-month-old blue pit bull puppy. He is playful and friendly, and has been raised around children. He is up to date on his shots and has been dewormed."
    },
    {
      title: 'Rottweiler',
      image: './images/rottweiler-puppy.jpeg',
      price: '3,500-$9,000',
      description: "8-week old Rottweiler for sale!This little guy is full of energy and loves to play. He is very friendly and would make a great addition to any family.He is up to date on all of his shots and has been dewormed."
    }
    ]
    
    var postHTML = " "
  
  
  

  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="col-lg-3 my-3"><div class="product card" style="height:450px;"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img class="card-img-top" style="width:100%; height:200px; object-fit:cover;" src="' + shop[i].image + '"/.img'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class="card-text "><p>'+shop[i].description + '</p><button type="button" class="btn btn-success"> add to cart</button></div></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML