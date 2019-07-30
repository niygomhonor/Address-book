// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    
    
  }
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }


//   function address(country,city){
//       this.country=country;
//       this.city=city;
//   }
  //user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      console.log(newContact);
//    $(".new-address").each(function(){
//        var inputtedCountry=$(this).find("input.new-country").val();
//        var inputtedCity=$(this).find("input.new-city").val();
//        var newAddress=new address(inputtedCountry,inputtedCity)
     
//    })
      $("ul#contacts").prepend("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
      $(".contact").first().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
      });

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");

       
    });
  }); 