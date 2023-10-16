export const environment = {
    production: false,
    config: {
      fromTokenValid: 'https://wpl-auth-core/api/login',
      tokenKey: 'wpl-local-operator-app-token', // this token is used for every request where is needed
      userKey: 'wpl-local-operator-app-user', // here we find local storage with minimal user data
      storageKey: 'wpl-local-operator', // here we find key for predefined local storage for app functionalities
      copyrightText: 'Copyright © Directia de Urbanism Sector 4 - 2023',
      defaultLNG: 'ro',
      emailRegex:
        '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
      codeSMSRegex: /^[0-9]+$/,
      phoneRegex: '[0-9]{6,20}',
      cnpRegex: '[0-9]{13,13}',
      validatorsAccrossApp: {
        minPassword: 8,
        maxPassword: 30,
        emailMaxLength: 50,
        minStringLength: 2,
        maxStringLength: 60,
        minSmsCodeLength: 1,
        maxSmsCodeLength: 1,
      },
      customNotifications: {
        icons: {
          success: 'success',
          error: 'error',
          info: 'info',
          warning: 'warning',
        },
        headers: {
          success: 'Success',
          error: 'Eroare',
          successForm: 'Felicitari!',
        },
        generalMessages: {
          error:
            'Ne pare rau, dar am intampinat o problema. Va rugam sa reincercati. Daca problema persista, va rugam sa ne contactati prin butonul de suport IT.',
        },
      },
      romanianLanguageDataTable: {
        sEmptyTable: 'Niciun rezultat găsit',
        sInfo: 'Afișate de la _START_ până la _END_ din _TOTAL_ înregistrări',
        sInfoEmpty: 'Afișate de la 0 până la 0 din 0 înregistrări',
        sInfoFiltered: '(filtrat din _MAX_ înregistrări)',
        sInfoPostFix: '',
        sInfoThousands: ',',
        sLengthMenu: 'Afișează _MENU_ înregistrări pe pagină',
        sLoadingRecords: 'Încărcare...',
        sProcessing: 'Procesare...',
        sSearch: 'Caută:',
        sZeroRecords: 'Niciun rezultat găsit',
        oPaginate: {
          sFirst: 'Prima',
          sLast: 'Ultima',
          sNext: 'Următoarea',
          sPrevious: 'Anterioara',
        },
        oAria: {
          sSortAscending: ': activează pentru a sorta coloana crescător',
          sSortDescending: ': activează pentru a sorta coloana descrescător',
        },
      },
    },
    interop: {
      basePath: 'https://wpl-urbanism-core/',
      urbanism: {
        settings: {
          configurations: {
            // PLATFORM CONFIGURATION - URBANISM
            getConfigurations: 'api/settings/configuration/list',
            getSlugConfiguration: 'api/settings/configuration/find/', // + slug
            getConfiguration: 'api/settings/configuration/one/', // + id
            putConfiguration: 'api/settings/configuration/update', // id in payload
            storeConfiguration: 'api/settings/configuration/store',
          },
        },
        nomenclatoare: {
          permissions: {
            getUserPermissions: 'api/nomenclatoare/permission/list',
            getUserPermissionsActive: 'api/nomenclatoare/permission/list/active',
            getUserPermissionsActivePublic:
              'api/nomenclatoare/permission/list/public',
            getUserPermission: 'api/nomenclatoare/permission/find/', // + id
            changeStatusUserPermissionActive:
              'api/nomenclatoare/permission/active/', // + id
            changeStatusUserPermissionPublic:
              'api/nomenclatoare/permission/public/', // + id
            deleteUserPermission: 'api/nomenclatoare/permission/delete/', // + id
            storeUserPermission: 'api/nomenclatoare/permission/store',
          },
          permissionActions: {
            getPermissionActionsDT: 'api/nomenclatoare/permission-action/list-dt',
            getPermissionActions: 'api/nomenclatoare/permission-action/list',
            getPermissionActionsActive:
              'api/nomenclatoare/permission-action/list/active',
            getPermissionActionsActivePublic:
              'api/nomenclatoare/permission-action/list/public',
            getPermissionAction: 'api/nomenclatoare/permission-action/find/', // + id
            putPermissionAction: 'api/nomenclatoare/permission-action/update',
            changeStatusPermissionActionActive:
              'api/nomenclatoare/permission-action/active/', // + id
            changeStatusPermissionActionPublic:
              'api/nomenclatoare/permission-action/public/', // + id
            deletePermissionAction: 'api/nomenclatoare/permission-action/delete/', // + id
            storePermissionAction: 'api/nomenclatoare/permission-action/store',
          },
          section: {
            // sections from within the platform
            getSectionsDT: 'api/nomenclatoare/section/list-dt',
            getSections: 'api/nomenclatoare/section/list',
            getSectionsActive: 'api/nomenclatoare/section/list/active',
            getSectionsActivePublic: 'api/nomenclatoare/section/list/public',
            getSection: 'api/nomenclatoare/section/find/', // + id
            putSection: 'api/nomenclatoare/section/update', // id in payload
            changeStatusSectionActive: 'api/nomenclatoare/section/active/', // + id
            changeStatusSectionPublic: 'api/nomenclatoare/section/public/', // + id
            deleteSection: 'api/nomenclatoare/section/delete/', // + id
            storeSection: 'api/nomenclatoare/section/store',
          },
          functie: {
            // functii operatori from the platform
            getFunctiiDT: 'api/nomenclatoare/functie/list-dt',
            getFunctii: 'api/nomenclatoare/functie/list',
            getFunctiiActive: 'api/nomenclatoare/functie/list/active',
            getFunctiiActivePublic: 'api/nomenclatoare/functie/list/public',
            getFunctie: 'api/nomenclatoare/functie/find/', // + id
            putFunctie: 'api/nomenclatoare/functie/update', // id in payload
            changeStatusFunctieActive: 'api/nomenclatoare/functie/active/', // + id
            changeStatusFunctiePublic: 'api/nomenclatoare/functie/public/', // + id
            deleteFunctie: 'api/nomenclatoare/functie/delete/', // + id
            storeFunctie: 'api/nomenclatoare/functie/store',
          },
          imageType: {
            // used to resize images to certain sizes
            getImageTypesDT: 'api/nomenclatoare/image-type/list-dt',
            getImageTypes: 'api/nomenclatoare/image-type/list',
            getImageType: 'api/nomenclatoare/image-type/find/', // + id
            putImageType: 'api/nomenclatoare/image-type/update', // id in payload
            deleteImageType: 'api/nomenclatoare/image-type/delete/', // + id
          },
          cerereType: {
            getCerereTypesDT: 'api/nomenclatoare/cerere-type/list-dt',
            getCerereTypes: 'api/nomenclatoare/cerere-type/list',
            getCerereType: 'api/nomenclatoare/cerere-type/find/', // + id
            putCerereType: 'api/nomenclatoare/cerere-type/update', // id in payload
            deleteCerereType: 'api/nomenclatoare/cerere-type/delete/', // + id
            storeCerereType: 'api/nomenclatoare/cerere-type/store',
            getCerereTypesActive: 'api/nomenclatoare/cerere-type/list/active',
            getCerereTypesActivePublic:
              'api/nomenclatoare/cerere-type/list/public',
            changeStatusCerereTypeActive: 'api/nomenclatoare/cerere-type/active/', // + id
            changeStatusCerereTypePublic: 'api/nomenclatoare/cerere-type/public/', // + id
          },
          cerereStatus: {
            getCerereStatusesDT: 'api/nomenclatoare/cerere-status/list-dt',
            getCerereStatuses: 'api/nomenclatoare/cerere-status/list',
            getCerereStatus: 'api/nomenclatoare/cerere-status/find/', // + id
            putCerereStatus: 'api/nomenclatoare/cerere-status/update', // id in payload
            deleteCerereStatus: 'api/nomenclatoare/cerere-status/delete/', // + id
            storeCerereStatus: 'api/nomenclatoare/cerere-status/store',
            getCerereStatusesActive:
              'api/nomenclatoare/cerere-status/list/active',
            getCerereStatusesActivePublic:
              'api/nomenclatoare/cerere-status/list/public',
            changeStatusCerereStatusActive:
              'api/nomenclatoare/cerere-status/active/', // + id
            changeStatusCerereStatusPublic:
              'api/nomenclatoare/cerere-status/public/', // + id
          },
          cererePriority: {
            getCererePrioritiesDT: 'api/nomenclatoare/cerere-priority/list-dt',
            getCererePriorities: 'api/nomenclatoare/cerere-priority/list',
            getCererePriority: 'api/nomenclatoare/cerere-priority/find/', // + id
            putCererePriority: 'api/nomenclatoare/cerere-priority/update', // id in payload
            deleteCererePriority: 'api/nomenclatoare/cerere-priority/delete/', // + id
            storeCererePriority: 'api/nomenclatoare/cerere-priority/store',
            getCererePrioritiesActive:
              'api/nomenclatoare/cerere-priority/list/active',
            getCererePrioritiesActivePublic:
              'api/nomenclatoare/cerere-priority/list/public',
            changeStatusCererePriorityActive:
              'api/nomenclatoare/cerere-priority/active/', // + id
            changeStatusCererePriorityPublic:
              'api/nomenclatoare/cerere-priority/public/', // + id
          },
          cerereSabloane: {
            getCerereSabloaneDT: 'api/nomenclatoare/cerere-sabloane/list-dt',
            getCerereSabloane: 'api/nomenclatoare/cerere-sabloane/list',
            getCerereSablon: 'api/nomenclatoare/cerere-sabloane/find/', // + id
            putCerereSablon: 'api/nomenclatoare/cerere-sabloane/update', // id in payload
            deleteCerereSablon: 'api/nomenclatoare/cerere-sabloane/delete/', // + id
            storeCerereSablon: 'api/nomenclatoare/cerere-sabloane/store',
            getCerereSabloaneActive:
              'api/nomenclatoare/cerere-sabloane/list/active',
            getCerereSabloaneActivePublic:
              'api/nomenclatoare/cerere-sabloane/list/public',
            changeStatusCerereSablonActive:
              'api/nomenclatoare/cerere-sabloane/active/', // + id
            changeStatusCerereSablonPublic:
              'api/nomenclatoare/cerere-sabloane/public/', // + id
          },
          platformSection: {
            // sections to be displayed and grouped for cetateni. !!! ALSO. From this section, we can get all the next resources to show to operator. Content, FAQ, Announces
            getPlatformSectionsDT: 'api/nomenclatoare/platform-section/list-dt',
            getPlatformSections: 'api/nomenclatoare/platform-section/list',
            getPlatformSection: 'api/nomenclatoare/platform-section/find/', // + id
            putPlatformSection: 'api/nomenclatoare/platform-section/update', // id in payload
            deletePlatformSection: 'api/nomenclatoare/platform-section/delete/', // + id
            storePlatformSection: 'api/nomenclatoare/platform-section/store',
            getPlatformSectionsActive:
              'api/nomenclatoare/platform-section/list/active',
            changeStatusPlatformSectionActive:
              'api/nomenclatoare/platform-section/active/', // + id
          },
          platformFAQ: {
            // frequently asked questions, for platform cetateni
            getPlatformFAQsDT: 'api/nomenclatoare/platform-faq/list-dt',
            getPlatformFAQs: 'api/nomenclatoare/platform-faq/list', // ?section_id={id}
            getPlatformFAQ: 'api/nomenclatoare/platform-faq/find/', // + id
            putPlatformFAQ: 'api/nomenclatoare/platform-faq/update', // id in payload
            deletePlatformFAQ: 'api/nomenclatoare/platform-faq/delete/', // + id
            storePlatformFAQ: 'api/nomenclatoare/platform-faq/store',
            getPlatformFAQsActive: 'api/nomenclatoare/platform-faq/list/active', // ?section_id={id}
            changeStatusPlatformFAQActive:
              'api/nomenclatoare/platform-faq/active/', // + id
          },
          platformContent: {
            // content for platform cetateni
            getPlatformContentsDT: 'api/nomenclatoare/platform-content/list-dt',
            getPlatformContents: 'api/nomenclatoare/platform-content/list', // ?section_id={id}
            getPlatformContent: 'api/nomenclatoare/platform-content/find/', // + id
            putPlatformContent: 'api/nomenclatoare/platform-content/update', // id in payload
            deletePlatformContent: 'api/nomenclatoare/platform-content/delete/', // + id
            storePlatformContent: 'api/nomenclatoare/platform-content/store',
            getPlatformContentsActive:
              'api/nomenclatoare/platform-content/list/active', // ?section_id={id}
            changeStatusPlatformContentActive:
              'api/nomenclatoare/platform-content/active/', // + id
          },
          platformAnnounces: {
            // announces for platform cetateni
            getPlatformAnnouncesDT:
              'api/nomenclatoare/platform-announces/list-dt',
            getPlatformAnnounces: 'api/nomenclatoare/platform-announces/list', // ?section_id={id}
            getPlatformAnnounce: 'api/nomenclatoare/platform-announces/find/', // + id
            putPlatformAnnounce: 'api/nomenclatoare/platform-announces/update', // id in payload
            deletePlatformAnnounce:
              'api/nomenclatoare/platform-announces/delete/', // + id
            storePlatformAnnounce: 'api/nomenclatoare/platform-announces/store',
            getPlatformAnnouncesActive:
              'api/nomenclatoare/platform-announce/list/active', // ?section_id={id}
            changeStatusPlatformAnnounceActive:
              'api/nomenclatoare/platform-announce/active/', // + id
          },
          judet: {
            getJudete: 'api/nomenclatoare/judet/list',
            getJudeteDT: 'api/nomenclatoare/judet/list-dt',
            getJudet: 'api/nomenclatoare/judet/find/', // + id
            putJudet: 'api/nomenclatoare/judet/update', // id in payload
            deleteJudet: 'api/nomenclatoare/judet/delete/', // + id
            storeJudet: 'api/nomenclatoare/judet/store',
            getJudeteActive: 'api/nomenclatoare/judet/list/active',
            getJudeteActivePublic: 'api/nomenclatoare/judet/list/public',
            changeStatusJudetActive: 'api/nomenclatoare/judet/active/', // + id
            changeStatusJudetPublic: 'api/nomenclatoare/judet/public/', // + id
          },
        },
      },
      authCore: {
        basePath: 'https://wpl-auth-core/',
        linkRedirectAuth: 'http://localhost:4100/',
        platform: {
          getUserDetails: 'api/user', // get user from token and also validate token for operator to autorize actions
        },
      },
    },
  };
  
  /*
   *  To run this proper configuration, please use: ng serve
   */
  