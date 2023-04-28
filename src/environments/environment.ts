// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  apiHost: 'http://localhost:8762/',
    /**user */
  authuser:'user/authenticate',
  reguser:'user/registrate',
  deleteuser:'user/delete/',
  getuser:'user/',
  getallusers:'user/AllUsers',
  newpwdlink:'user/newpassword/',
  updateuser:'user/update',
  /**service */
  getallservices:'service/Get-All-Service',
  getservice:'service/Get-Service/',
  addservice:'service/addService',
  deleteservice:'service/remove-Service/',
  /**citoyen */
  getallcitoyen:'citoyen/retrieve-all-citoyens',
  getcitoyen:'citoyen/retrieve-citoyen-id/',
  getcitoyenbycin:'citoyen/retrieve-citoyen-cin/',
  addcitoyen:'citoyen/add-citoyen',
  removecitoyen:'citoyen/remove-contrat/',
  updatecitoyen:'citoyen/update-contrat',
  /**municipalite */
  getallmunicip:'Municipalite/getAll',
  getmunicip:'Municipalite/getOne/',
  addmunicip:'Municipalite/AddMunicip',
  deleteMunicip:'Municipalite/delete/',
  updateMunicip:'Municipalite/update',
  getByNameMunicip:'Municipalite/getbyName/',
  /**reclamation */

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
