var vm = new Vue({
  el: '#app',
  data: {
    "restaurant": [
  {
    "address": {
      "city": "",
      "country_code": "",
      "id": "",
      "latitude": "",
      "longitude": "",
      "street": "",
      "street_no": "",
      "zipcode": ""
    },
    "chain": {
      "group_name": "",
      "id": "",
      "key_account": "",
      "name": ""
    },
    "created_ts": "",
    "custom_data": "",
    "deleted": "",
    "emails": [
      {
        "email": "",
        "email_type": "",
        "id": "",
        "imprint": ""
      }
    ],
    "global_id": "",
    "id": "",
    "modified_ts": "",
    "owner": {
      "business_entity": "",
      "company": "",
      "id": "",
      "managing_directors": "",
      "name": "",
      "registration_court": "",
      "registration_number": "",
      "tax_number": ""
    },
    "phones": [
      {
        "id": "",
        "imprint": "",
        "phone_number": "",
        "phone_type": ""
      },
      {
        "id": "",
        "imprint": "",
        "phone_number": "",
        "phone_type": ""
      }
    ],
    "platforms": {
      "LH": {
        "categories": [
          {
            "id": "",
            "name": "",
            "primary_category": ""
          },
          {
            "id": "",
            "name": "",
            "primary_category": ""
          }
        ],
        "custom_data": {
          "cocacola_promotion": "",
          "custom_preorder_minimum_time": "",
          "default_delivery_time": "",
          "express": "",
          "express_refund_logic": "",
          "guaranteed_delivery_time": "",
          "hide_google_places_order_action": "",
          "lh_award": "",
          "ninecookies_live_tracking": "",
          "preorder": "",
          "recommended": "",
          "white_label": "",
          "white_label_external": "",
          "white_label_offline": ""
        },
        "deleted": "",
        "id": "",
        "key_account": "",
        "last_dowant_sync_ts": "",
        "last_salesforce_sync_ts": "",
        "name": "",
        "online": "",
        "payment_methods": [
          {
            "id": "",
            "name": "",
            "online_payment": ""
          },
          {
            "id": "",
            "name": "",
            "online_payment": ""
          }
        ],
        "platform": "",
        "platform_id": "",
        "reachable": "",
        "salesforce_id": "",
        "slug": "",
        "transmissions": [
          {
            "enabled": "",
            "id": "",
            "name": "",
            "parameters": {
              "device_id": "",
              "phone_number": ""
            }
          },
          {
            "enabled": "",
            "id": "",
            "name": "",
            "parameters": {
              "sms_number": ""
            }
          }
        ]
      },
      "PDE": {
        "categories": [
          {
            "id": "",
            "name": "",
            "primary_category": ""
          },
          {
            "id": "",
            "name": "",
            "primary_category": ""
          }
        ],
        "custom_data": {
          "brand_promotion_monday": "",
          "brand_promotion_thursday": "",
          "brand_promotion_tuesday": "",
          "brand_promotion_wednesday": "",
          "cocacola_promotion": "",
          "custom_preorder_minimum_time": "",
          "default_delivery_time": "",
          "express": "",
          "express_refund_logic": "",
          "guaranteed_delivery_time": "",
          "hide_google_places_order_action": "",
          "kinder_menu": "",
          "ninecookies_live_tracking": "",
          "pde_anniversary": "",
          "preorder": "",
          "white_label": "",
          "white_label_external": "",
          "white_label_offline": ""
        },
        "deleted": "",
        "id": "",
        "key_account": "",
        "last_dowant_sync_ts": "",
        "last_salesforce_sync_ts": "",
        "name": "",
        "online": "",
        "payment_methods": [
          {
            "id": "",
            "name": "",
            "online_payment": ""
          },
          {
            "id": "",
            "name": "",
            "online_payment": ""
          },
          {
            "id": "",
            "name": "",
            "online_payment": ""
          }
        ],
        "platform": "",
        "platform_id": "",
        "reachable": "",
        "salesforce_id": "",
        "slug": "",
        "transmissions": [
          {
            "enabled": "",
            "id": "",
            "name": "",
            "parameters": {
              "pos_polling_id": "",
              "pos_polling_password": "",
              "pos_polling_user": ""
            }
          },
          {
            "enabled": "",
            "id": "",
            "name": "",
            "parameters": {
              "sms_number": ""
            }
          }
        ]
      }
    }

  }]},
  mounted: function() {
    this.load();
  },
  methods: {
    load: function() {
      this.restaurant = '...loading';
      var vm = this;
      axios.get('https://my-json-server.typicode.com/richardmccutchan/rmspoc/restaurant')
        .then(function(response) {
          vm.restaurant = response.data;
        })
        .catch(function(error) {
          vm.restaurant = 'error' + error;
        });
    },
    postNow: function() {
    	console.log(vm.restaurant[0]);
      axios.post('https://my-json-server.typicode.com/richardmccutchan/rmspoc/restaurant', vm.restaurant[0], {headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    }});
    }
  }
});
