# Rails 5.2 Ajax

A simple application to test different ways to use Ajax in forms in Rails 5.2. No jQuery needed!

### Method 1: Add an event listener

``app/views/users/new.html.erb``

The top form expects a JSON response:

```ruby
form_for @user, url: users_path(format: "json"), html: {id: "ajax-form"}, remote: true do |f|
```

``app/assets/javascripts/users.js``

A Rails-ujs event handler (ajax:success) is added to do something with the JSON received from the controller:

```javascript
element.addEventListener("ajax:success", (event) => {
```

### Method 2: Server-generated JavaScript

``app/views/users/new.html.erb``

``app/controllers/users_controller.rb``

The bottom form takes advantage of Server-generated JavaScript by simply specific ``format.js`` in the block given ``respond_to`` in the Users controller.

``app/views/users/create.js.erb``

Server-generated JavaScript is a convenient way to use information available at the Controller level in responding to an Ajax call.

```ruby
document.getElementById("sgj-result-display").innerHTML = "<%= @user.name %>";
```
