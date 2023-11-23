/**
 * Contains the miscellaneous route handlers.
 * @author Peter Boakye <https://github.com/petboa>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
