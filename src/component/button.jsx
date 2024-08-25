var MyClass = React.createClass({
    render: function() {
      return (
  
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" /><br /><br />
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" /><br /><br />
          <input type="submit" defaultValue="Submit" />
        </form>
      );
    }
  });