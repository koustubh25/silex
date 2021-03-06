# Bento - System Monitoring

This project is built using [Angular 2](https://angular.io/) and [silex](http://silex.sensiolabs.org/)

### Installation and Setup

1. Point the document root of the web server to the `public` directory. Sample Apache configuration is as follows
```
<VirtualHost *:80>
    ServerName bento
    ErrorLog /var/log/apache2/bento.error_log
    DocumentRoot "/projects/mv2/bento/public"
    <Directory "/projects/mv2/bento/public">
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>

```

2. You need to run `composer install --no-dev` in the root directory.
3. You also need to run `npm install` in the `public/dashboard` directory and then `npm run tsc` to compile typescript to javascript.
4. Edit the `config.yml` file in the root directory. You can set the list of Gearman and Supervisor Servers here. Make sure that the other servers are reachable from this machine.
5. You can set Javascript specific parameters like `polling interval` or `API endpoints` in the `public/dashboard/app/config/config.ts`.
6. Batch servers on the Bento Dashboard need access to Deliver DB, hence the backend for batch servers is located `deliver` repo. Make sure that it is setup as per the README in `deliver/batch_servers` in the `deliver` repo.
7. Make sure that `http://bento/dashboard` is accessible.
8. To setup Netflix Vector, you need to install [PCP](http://pcp.io/) using the script `install-pcp.sh` in the `deliver` repo. Also, make sure that port number `44323` of the batch server is accessible from your machine.

### Known Bugs

1. The [Netflix Vector](https://github.com/Netflix/vector) tab in the Bento Dashboard is obtained from the official Netflix [repos](https://github.com/Netflix), which is written in Angular 1.x. This project simply embeds the built code with a few tweaks.

    Switching to a different tab from the `Netflix Vector` tab, will keep generating error messages in the console based on the `interval` set. The reason is that the DOM is destroyed but the requests don't stop. The correct way to stop these messages is destroy on the app on `ngDestroy()`.

2.  Since the official Angular-Material design for Angular 2 is still 'work in proggress', the UI has been built using [Material design lite](http://www.getmdl.io/). Due to the dynamic nature of the DOM, it creates few issues when the DOM contents changes. There will be some erros in the console related to this.


### To Dos

1. Display detailed error messages.
2. Add validation before submitting request.
3. Fix UI glitches.
4. Refactor the code to avoid repetition.
5. Generate confirmation dialog boxes to prevent accidental modification.
6. Add remove buttons when adding multiple private servers by host id.
7. Sorting tables (gearman and supervisor).
8. Using build tools like gulp.




