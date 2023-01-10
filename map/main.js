import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import View from 'ol/View';
import {getCenter} from 'ol/extent';

import Feature from 'ol/Feature';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';


let configuratorSections = [
    {
      "id": 1,
      "building_tep_id": 2,
      "name": "АР",
      "plansFromTo": [1,2,3,4,5,6,7],
      "plans": [
        {
          "id": 1,
          "section_id": 1,
          "floor_from": 1,
          "floor_to": 3,
          "plan_filename": "../test_img/3.jpg",
          "floorsFromTo": [1,2,3],
          "size": [4678,3309]
        },
        {
          "id": 2,
          "section_id": 1,
          "floor_from": 4,
          "floor_to": 7,
          "plan_filename": "../test_img/2.jpg",
          "floorsFromTo": [4,5,6,7],
          "size": [951,1920]
        }
      ]
    },
    {
      "id": 6,
      "building_tep_id": 2,
      "name": "ГС",
      "plansFromTo": [1,2,3],
      "plans": [
        {
          "id": 6,
          "section_id": 6,
          "floor_from": 1,
          "floor_to": 3,
          "plan_filename": "../test_img/1.jpg",
          "floorsFromTo": [1,2,3],
          "size": [2339,3309]
        }
      ]
    },
    {
      "id": 7,
      "building_tep_id": 2,
      "name": "ending of life",
      "plansFromTo": [1,2],
      "plans": [
        {
          "id": 7,
          "section_id": 7,
          "floor_from": 1,
          "floor_to": 1,
          "plan_filename": "../test_img/4.jpg",
          "floorsFromTo": [1],
          "size": [9933,14042]
        },
        {
          "id": 8,
          "section_id": 7,
          "floor_from": 2,
          "floor_to": 2,
          "plan_filename": "../test_img/1.jpg",
          "floorsFromTo": [2],
          "size": [2339,3309]
        }
      ]
    }
  ]; /*{!! $configuratorSections !!}*/
let events = [
  {
    "id": 4,
    "creator_id": 119,
    "configurator_plan_id": 1,
    "floor": 1,
    "company_id": 131,
    "date_completion": "2022-09-02T00:00:00.000000Z",
    "code": "cb3c78d6-7c11-4a24-96bf-5b7c8c1bd93a",
    "category": 1,
    "description": "Описание",
    "standard": "Норматив",
    "work": "Устранить что-то",
    "position_x": 459,
    "position_y": 443,
    "created_at": "2022-09-01T15:01:33.000000Z",
    "updated_at": "2022-09-01T15:10:48.000000Z",
    "status": "send",
    "histories": [
      {
        "id": 5,
        "technical_order_id": 4,
        "date": "2022-09-01T15:01:33.000000Z",
        "status": "created",
        "comment": null,
        "created_at": "2022-09-01T15:01:33.000000Z",
        "updated_at": "2022-09-01T15:01:33.000000Z",
        "documents": [
          {
            "id": 21,
            "technical_order_history_id": 5,
            "type": "work_photo",
            "filename": "docs/technical_orders/d9MRmojTR84tW8gJyprnHCR1bfgI6NJtSflJKi8i.jpg",
            "created_at": "2022-09-01T15:01:33.000000Z",
            "updated_at": "2022-09-01T15:01:33.000000Z"
          },
          {
            "id": 22,
            "technical_order_history_id": 5,
            "type": "work_photo",
            "filename": "docs/technical_orders/ZkhsevpEDbTOnn9gMlOFO97fMjV3mnmlmmmaCbrU.jpg",
            "created_at": "2022-09-01T15:01:33.000000Z",
            "updated_at": "2022-09-01T15:01:33.000000Z"
          },
          {
            "id": 23,
            "technical_order_history_id": 5,
            "type": "work_photo",
            "filename": "docs/technical_orders/tk6u2d5WaEmZvXrwrC750pdvcNGz4nAS4Gtc0HS5.jpg",
            "created_at": "2022-09-01T15:01:33.000000Z",
            "updated_at": "2022-09-01T15:01:33.000000Z"
          },
          {
            "id": 24,
            "technical_order_history_id": 5,
            "type": "work_photo",
            "filename": "docs/technical_orders/RB83YojhtJtVV28WqSPmfsHSlfKvhKqFdRFPAHdt.jpg",
            "created_at": "2022-09-01T15:01:33.000000Z",
            "updated_at": "2022-09-01T15:01:33.000000Z"
          },
          {
            "id": 25,
            "technical_order_history_id": 5,
            "type": "work_photo",
            "filename": "docs/technical_orders/JX8L0u1vKKk6ZhugbA4GlKwXwvIxRa0SUhMW7Ay5.jpg",
            "created_at": "2022-09-01T15:01:33.000000Z",
            "updated_at": "2022-09-01T15:01:33.000000Z"
          },
          {
            "id": 26,
            "technical_order_history_id": 5,
            "type": "work_photo",
            "filename": "docs/technical_orders/9ajUyRpNT1oG7FWSoZhZIvilUfVwazgKqD0wPzUh.jpg",
            "created_at": "2022-09-01T15:01:33.000000Z",
            "updated_at": "2022-09-01T15:01:33.000000Z"
          },
          {
            "id": 27,
            "technical_order_history_id": 5,
            "type": "work_photo",
            "filename": "docs/technical_orders/WXm2UtDQOyoMk0wvZ9TjiZb6ttLVVKKc8RXa7FFj.jpg",
            "created_at": "2022-09-01T15:01:33.000000Z",
            "updated_at": "2022-09-01T15:01:33.000000Z"
          },
          {
            "id": 28,
            "technical_order_history_id": 5,
            "type": "work_photo",
            "filename": "docs/technical_orders/EEzfcmkQUh4TNIM3GrAfBOm1WeOVmwpuu5xSxr8p.jpg",
            "created_at": "2022-09-01T15:01:33.000000Z",
            "updated_at": "2022-09-01T15:01:33.000000Z"
          }
        ]
      },
      {
        "id": 7,
        "technical_order_id": 4,
        "date": "2022-09-01T15:10:57.000000Z",
        "status": "send",
        "comment": null,
        "created_at": "2022-09-01T15:10:57.000000Z",
        "updated_at": "2022-09-01T15:10:57.000000Z",
        "documents": [
          {
            "id": 37,
            "technical_order_history_id": 7,
            "type": "ecp",
            "filename": "docs/technical_orders/5e54645da3c6f0140711fc761d570739.sig",
            "created_at": "2022-09-01T15:10:57.000000Z",
            "updated_at": "2022-09-01T15:10:57.000000Z"
          }
        ]
      }
    ],
    "company": {
      "id": 131,
      "type": "legal",
      "name": "ООО \"СПЕЦИАЛИЗИРОВАННЫЙ ЗАСТРОЙЩИК \"СЗЛК-ЮГ\"",
      "legal_address": "188322, Ленинградская область, М.Р-Н ГАТЧИНСКИЙ, Г.П. КОММУНАРСКОЕ, Г КОММУНАР, ПЕР МАЛЫЙ, Д. 1, ОФИС 2",
      "postal_address": "188322, Ленинградская область, М.Р-Н ГАТЧИНСКИЙ, Г.П. КОММУНАРСКОЕ, Г КОММУНАР, ПЕР МАЛЫЙ, Д. 1, ОФИС 2",
      "inn": "4705090931",
      "kpp": "470501001",
      "ogrn": "1214700009523",
      "okpo": "50999303",
      "bank_name": "Северо-Западный Банк ПАО Сбербанк",
      "bank_account": "76589",
      "ks": "7865987649",
      "bik": "56437",
      "phone": "+7(665)465-46-54",
      "director": "Канунников Дмитрий Евгеньевич",
      "authority": "Собственник",
      "position": null,
      "developer": 121,
      "started_at": "2022-08-01",
      "created_at": "2022-08-31T14:58:46.000000Z",
      "updated_at": "2022-09-01T14:50:34.000000Z",
      "deleted_at": null
    },
    "creator": {
      "id": 119,
      "name": "Администратор И.О.",
      "email": "ourmatlib@gmail.com",
      "email_verified_at": "2022-07-20T12:29:46.000000Z",
      "company_id": 121,
      "project_id": 34,
      "group_id": 4,
      "created_at": "2022-07-20T12:27:58.000000Z",
      "updated_at": "2022-11-27T15:53:11.000000Z",
      "deleted_at": null,
      "status": "active"
    }
  },
  {
    "id": 5,
    "creator_id": 119,
    "configurator_plan_id": 1,
    "floor": 1,
    "company_id": 131,
    "date_completion": "2022-09-02T00:00:00.000000Z",
    "code": "fb0b5755-d502-428d-8354-af05bec05abf",
    "category": 1,
    "description": "кеуенг",
    "standard": "поцукавлуарре",
    "work": "опалршурл",
    "position_x": 1008,
    "position_y": 436,
    "created_at": "2022-09-01T15:03:01.000000Z",
    "updated_at": "2022-09-01T15:03:01.000000Z",
    "status": "send",
    "histories": [
      {
        "id": 6,
        "technical_order_id": 5,
        "date": "2022-09-01T15:03:01.000000Z",
        "status": "created",
        "comment": null,
        "created_at": "2022-09-01T15:03:01.000000Z",
        "updated_at": "2022-09-01T15:03:01.000000Z",
        "documents": [
          {
            "id": 29,
            "technical_order_history_id": 6,
            "type": "work_photo",
            "filename": "docs/technical_orders/XeOe5Ew16PGUzBGh2ObUPR5EKKzg7Fpv1NUgz0q1.jpg",
            "created_at": "2022-09-01T15:03:01.000000Z",
            "updated_at": "2022-09-01T15:03:01.000000Z"
          },
          {
            "id": 30,
            "technical_order_history_id": 6,
            "type": "work_photo",
            "filename": "docs/technical_orders/BJWzFKkPcV6B7J7eiIhL2T97ndB05cnRwCrvtrI5.jpg",
            "created_at": "2022-09-01T15:03:01.000000Z",
            "updated_at": "2022-09-01T15:03:01.000000Z"
          },
          {
            "id": 31,
            "technical_order_history_id": 6,
            "type": "work_photo",
            "filename": "docs/technical_orders/7QjiWNtkXr97IK1WqJhJ5bst9yPbT7ucJ8qEbvsp.jpg",
            "created_at": "2022-09-01T15:03:01.000000Z",
            "updated_at": "2022-09-01T15:03:01.000000Z"
          },
          {
            "id": 32,
            "technical_order_history_id": 6,
            "type": "work_photo",
            "filename": "docs/technical_orders/9Ziad7K5b2IkpO0vuZp3YiOrkMM52OARPxWjzLAh.jpg",
            "created_at": "2022-09-01T15:03:01.000000Z",
            "updated_at": "2022-09-01T15:03:01.000000Z"
          },
          {
            "id": 33,
            "technical_order_history_id": 6,
            "type": "work_photo",
            "filename": "docs/technical_orders/VkFmtbqfvBGyGwCB6t41L2zBZvpb95BxJUP88DqS.jpg",
            "created_at": "2022-09-01T15:03:01.000000Z",
            "updated_at": "2022-09-01T15:03:01.000000Z"
          },
          {
            "id": 34,
            "technical_order_history_id": 6,
            "type": "work_photo",
            "filename": "docs/technical_orders/Er8NbPkInlrhDUcn4n8Gt9ICOr1TQPdKQoyGbqHn.jpg",
            "created_at": "2022-09-01T15:03:01.000000Z",
            "updated_at": "2022-09-01T15:03:01.000000Z"
          },
          {
            "id": 35,
            "technical_order_history_id": 6,
            "type": "work_photo",
            "filename": "docs/technical_orders/2oI798GlfZbmcfqnAudLWTgjAYOGPn15LU6d0yh0.jpg",
            "created_at": "2022-09-01T15:03:01.000000Z",
            "updated_at": "2022-09-01T15:03:01.000000Z"
          },
          {
            "id": 36,
            "technical_order_history_id": 6,
            "type": "work_photo",
            "filename": "docs/technical_orders/ovQma5yO9a2eKADGBTrPs4nHHfvxUybOx6CT7NQ8.jpg",
            "created_at": "2022-09-01T15:03:01.000000Z",
            "updated_at": "2022-09-01T15:03:01.000000Z"
          }
        ]
      },
      {
        "id": 16,
        "technical_order_id": 5,
        "date": "2022-09-19T09:54:00.000000Z",
        "status": "send",
        "comment": null,
        "created_at": "2022-09-19T09:54:00.000000Z",
        "updated_at": "2022-09-19T09:54:00.000000Z",
        "documents": [
          {
            "id": 51,
            "technical_order_history_id": 16,
            "type": "ecp",
            "filename": "docs/technical_orders/d107655e240bd0416ee065922fc03650.sig",
            "created_at": "2022-09-19T09:54:00.000000Z",
            "updated_at": "2022-09-19T09:54:00.000000Z"
          }
        ]
      }
    ],
    "company": {
      "id": 131,
      "type": "legal",
      "name": "ООО \"СПЕЦИАЛИЗИРОВАННЫЙ ЗАСТРОЙЩИК \"СЗЛК-ЮГ\"",
      "legal_address": "188322, Ленинградская область, М.Р-Н ГАТЧИНСКИЙ, Г.П. КОММУНАРСКОЕ, Г КОММУНАР, ПЕР МАЛЫЙ, Д. 1, ОФИС 2",
      "postal_address": "188322, Ленинградская область, М.Р-Н ГАТЧИНСКИЙ, Г.П. КОММУНАРСКОЕ, Г КОММУНАР, ПЕР МАЛЫЙ, Д. 1, ОФИС 2",
      "inn": "4705090931",
      "kpp": "470501001",
      "ogrn": "1214700009523",
      "okpo": "50999303",
      "bank_name": "Северо-Западный Банк ПАО Сбербанк",
      "bank_account": "76589",
      "ks": "7865987649",
      "bik": "56437",
      "phone": "+7(665)465-46-54",
      "director": "Канунников Дмитрий Евгеньевич",
      "authority": "Собственник",
      "position": null,
      "developer": 121,
      "started_at": "2022-08-01",
      "created_at": "2022-08-31T14:58:46.000000Z",
      "updated_at": "2022-09-01T14:50:34.000000Z",
      "deleted_at": null
    },
    "creator": {
      "id": 119,
      "name": "Администратор И.О.",
      "email": "ourmatlib@gmail.com",
      "email_verified_at": "2022-07-20T12:29:46.000000Z",
      "company_id": 121,
      "project_id": 34,
      "group_id": 4,
      "created_at": "2022-07-20T12:27:58.000000Z",
      "updated_at": "2022-11-27T15:53:11.000000Z",
      "deleted_at": null,
      "status": "active"
    }
  },
  {
    "id": 9,
    "creator_id": 119,
    "configurator_plan_id": 1,
    "floor": 1,
    "company_id": 121,
    "date_completion": "2022-09-29T00:00:00.000000Z",
    "code": "54fbc8a8-6859-4386-843c-f08796634a4a",
    "category": 3,
    "description": "4564789yi",
    "standard": "rtyuiop[",
    "work": "u9i0p[]",
    "position_x": 888,
    "position_y": 520,
    "created_at": "2022-09-19T09:53:16.000000Z",
    "updated_at": "2022-09-19T09:53:16.000000Z",
    "status": "send",
    "histories": [
      {
        "id": 14,
        "technical_order_id": 9,
        "date": "2022-09-19T09:53:16.000000Z",
        "status": "created",
        "comment": null,
        "created_at": "2022-09-19T09:53:16.000000Z",
        "updated_at": "2022-09-19T09:53:16.000000Z",
        "documents": [
          {
            "id": 49,
            "technical_order_history_id": 14,
            "type": "work_photo",
            "filename": "docs/technical_orders/iU9se3zdFbEi8kxhyKdwgBMhicSFzbRSh3V7qXFj.jpg",
            "created_at": "2022-09-19T09:53:16.000000Z",
            "updated_at": "2022-09-19T09:53:16.000000Z"
          }
        ]
      },
      {
        "id": 15,
        "technical_order_id": 9,
        "date": "2022-09-19T09:53:25.000000Z",
        "status": "send",
        "comment": null,
        "created_at": "2022-09-19T09:53:25.000000Z",
        "updated_at": "2022-09-19T09:53:25.000000Z",
        "documents": [
          {
            "id": 50,
            "technical_order_history_id": 15,
            "type": "ecp",
            "filename": "docs/technical_orders/6d2deeefb05fe08e4188474bcf1340c5.sig",
            "created_at": "2022-09-19T09:53:25.000000Z",
            "updated_at": "2022-09-19T09:53:25.000000Z"
          }
        ]
      }
    ],
    "company": {
      "id": 121,
      "type": "legal",
      "name": "ООО \"СТРОЙ МОНТАЖ\"",
      "legal_address": "195112, Г.Санкт-Петербург, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ МАЛАЯ ОХТА, ПЛ КАРЛА ФАБЕРЖЕ, Д. 8, ЛИТЕРА Б, ПОМЕЩ. 30-Н, КОМ. 35 ОФИС 721",
      "postal_address": "195112, Г.Санкт-Петербург, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ МАЛАЯ ОХТА, ПЛ КАРЛА ФАБЕРЖЕ, Д. 8, ЛИТЕРА Б, ПОМЕЩ. 30-Н, КОМ. 35 ОФИС 721",
      "inn": "7806407789",
      "kpp": "780601001",
      "ogrn": "1097847076766",
      "okpo": "60969196",
      "bank_name": "Северо-Западный Банк ПАО Сбербанк",
      "bank_account": "76589",
      "ks": "76589",
      "bik": "76589",
      "phone": "+7(911)036-63-32",
      "director": "Деревленко Виталие",
      "authority": "Собственник",
      "position": null,
      "developer": 0,
      "started_at": null,
      "created_at": "2022-07-20T12:27:04.000000Z",
      "updated_at": "2022-07-20T12:27:04.000000Z",
      "deleted_at": null
    },
    "creator": {
      "id": 119,
      "name": "Администратор И.О.",
      "email": "ourmatlib@gmail.com",
      "email_verified_at": "2022-07-20T12:29:46.000000Z",
      "company_id": 121,
      "project_id": 34,
      "group_id": 4,
      "created_at": "2022-07-20T12:27:58.000000Z",
      "updated_at": "2022-11-27T15:53:11.000000Z",
      "deleted_at": null,
      "status": "active"
    }
  },
  {
    "id": 13,
    "creator_id": 119,
    "configurator_plan_id": 1,
    "floor": 1,
    "company_id": 131,
    "date_completion": "2022-10-20T00:00:00.000000Z",
    "code": "RGcssihz",
    "category": 1,
    "description": "ыфв",
    "standard": "оыпе",
    "work": "онецк",
    "position_x": 1476,
    "position_y": 328,
    "created_at": "2022-10-13T10:14:59.000000Z",
    "updated_at": "2022-10-13T10:14:59.000000Z",
    "status": "send",
    "histories": [
      {
        "id": 20,
        "technical_order_id": 13,
        "date": "2022-10-13T10:14:59.000000Z",
        "status": "created",
        "comment": null,
        "created_at": "2022-10-13T10:14:59.000000Z",
        "updated_at": "2022-10-13T10:14:59.000000Z",
        "documents": [
          {
            "id": 55,
            "technical_order_history_id": 20,
            "type": "work_photo",
            "filename": "docs/technical_orders/oJEr1jgkJKL6r0S8XqUQGRHrCft7XrO89KATArdF.jpg",
            "created_at": "2022-10-13T10:14:59.000000Z",
            "updated_at": "2022-10-13T10:14:59.000000Z"
          }
        ]
      },
      {
        "id": 21,
        "technical_order_id": 13,
        "date": "2022-10-13T10:15:07.000000Z",
        "status": "send",
        "comment": null,
        "created_at": "2022-10-13T10:15:07.000000Z",
        "updated_at": "2022-10-13T10:15:07.000000Z",
        "documents": [
          {
            "id": 56,
            "technical_order_history_id": 21,
            "type": "ecp",
            "filename": "docs/technical_orders/47157fda1fdbe055edb56742c9a47c80.sig",
            "created_at": "2022-10-13T10:15:07.000000Z",
            "updated_at": "2022-10-13T10:15:07.000000Z"
          }
        ]
      }
    ],
    "company": {
      "id": 131,
      "type": "legal",
      "name": "ООО \"СПЕЦИАЛИЗИРОВАННЫЙ ЗАСТРОЙЩИК \"СЗЛК-ЮГ\"",
      "legal_address": "188322, Ленинградская область, М.Р-Н ГАТЧИНСКИЙ, Г.П. КОММУНАРСКОЕ, Г КОММУНАР, ПЕР МАЛЫЙ, Д. 1, ОФИС 2",
      "postal_address": "188322, Ленинградская область, М.Р-Н ГАТЧИНСКИЙ, Г.П. КОММУНАРСКОЕ, Г КОММУНАР, ПЕР МАЛЫЙ, Д. 1, ОФИС 2",
      "inn": "4705090931",
      "kpp": "470501001",
      "ogrn": "1214700009523",
      "okpo": "50999303",
      "bank_name": "Северо-Западный Банк ПАО Сбербанк",
      "bank_account": "76589",
      "ks": "7865987649",
      "bik": "56437",
      "phone": "+7(665)465-46-54",
      "director": "Канунников Дмитрий Евгеньевич",
      "authority": "Собственник",
      "position": null,
      "developer": 121,
      "started_at": "2022-08-01",
      "created_at": "2022-08-31T14:58:46.000000Z",
      "updated_at": "2022-09-01T14:50:34.000000Z",
      "deleted_at": null
    },
    "creator": {
      "id": 119,
      "name": "Администратор И.О.",
      "email": "ourmatlib@gmail.com",
      "email_verified_at": "2022-07-20T12:29:46.000000Z",
      "company_id": 121,
      "project_id": 34,
      "group_id": 4,
      "created_at": "2022-07-20T12:27:58.000000Z",
      "updated_at": "2022-11-27T15:53:11.000000Z",
      "deleted_at": null,
      "status": "active"
    }
  },
  {
    "id": 17,
    "creator_id": 119,
    "configurator_plan_id": 1,
    "floor": 1,
    "company_id": 131,
    "date_completion": "2022-11-29T00:00:00.000000Z",
    "code": "s1zyB4Th",
    "category": 2,
    "description": "ghfdjfhsjf",
    "standard": "jghfk",
    "work": "khfgld",
    "position_x": 1232,
    "position_y": 444,
    "created_at": "2022-11-26T21:46:37.000000Z",
    "updated_at": "2022-11-26T21:46:37.000000Z",
    "status": "send",
    "histories": [
      {
        "id": 25,
        "technical_order_id": 17,
        "date": "2022-11-26T21:46:37.000000Z",
        "status": "created",
        "comment": null,
        "created_at": "2022-11-26T21:46:37.000000Z",
        "updated_at": "2022-11-26T21:46:37.000000Z",
        "documents": [
          {
            "id": 60,
            "technical_order_history_id": 25,
            "type": "work_photo",
            "filename": "docs/technical_orders/hUzMmkXPdNuFiJodBN0bgv4CcoJIcRfsrWE4HaZT.jpg",
            "created_at": "2022-11-26T21:46:38.000000Z",
            "updated_at": "2022-11-26T21:46:38.000000Z"
          }
        ]
      },
      {
        "id": 26,
        "technical_order_id": 17,
        "date": "2022-11-26T21:46:53.000000Z",
        "status": "send",
        "comment": null,
        "created_at": "2022-11-26T21:46:53.000000Z",
        "updated_at": "2022-11-26T21:46:53.000000Z",
        "documents": [
          {
            "id": 61,
            "technical_order_history_id": 26,
            "type": "ecp",
            "filename": "docs/technical_orders/66f2c690934712ecc4f050540862ebc3.sig",
            "created_at": "2022-11-26T21:46:53.000000Z",
            "updated_at": "2022-11-26T21:46:53.000000Z"
          }
        ]
      }
    ],
    "company": {
      "id": 131,
      "type": "legal",
      "name": "ООО \"СПЕЦИАЛИЗИРОВАННЫЙ ЗАСТРОЙЩИК \"СЗЛК-ЮГ\"",
      "legal_address": "188322, Ленинградская область, М.Р-Н ГАТЧИНСКИЙ, Г.П. КОММУНАРСКОЕ, Г КОММУНАР, ПЕР МАЛЫЙ, Д. 1, ОФИС 2",
      "postal_address": "188322, Ленинградская область, М.Р-Н ГАТЧИНСКИЙ, Г.П. КОММУНАРСКОЕ, Г КОММУНАР, ПЕР МАЛЫЙ, Д. 1, ОФИС 2",
      "inn": "4705090931",
      "kpp": "470501001",
      "ogrn": "1214700009523",
      "okpo": "50999303",
      "bank_name": "Северо-Западный Банк ПАО Сбербанк",
      "bank_account": "76589",
      "ks": "7865987649",
      "bik": "56437",
      "phone": "+7(665)465-46-54",
      "director": "Канунников Дмитрий Евгеньевич",
      "authority": "Собственник",
      "position": null,
      "developer": 121,
      "started_at": "2022-08-01",
      "created_at": "2022-08-31T14:58:46.000000Z",
      "updated_at": "2022-09-01T14:50:34.000000Z",
      "deleted_at": null
    },
    "creator": {
      "id": 119,
      "name": "Администратор И.О.",
      "email": "ourmatlib@gmail.com",
      "email_verified_at": "2022-07-20T12:29:46.000000Z",
      "company_id": 121,
      "project_id": 34,
      "group_id": 4,
      "created_at": "2022-07-20T12:27:58.000000Z",
      "updated_at": "2022-11-27T15:53:11.000000Z",
      "deleted_at": null,
      "status": "active"
    }
  }
];

/* begin plan */ sectionList();
function sectionList() {

  let sections = document.querySelector('.nt-container [type="section"]');
  sections.innerHTML = '';

  configuratorSections.forEach((section) => {

    let option = document.createElement('option');
    option.setAttribute('value', section.id);
    option.innerText = section.name;

    sections.append(option);
  });

  floorList(configuratorSections[0].id);
}
window.sectionList = sectionList;

function floorList(num) {

  let floors = document.querySelector('.nt-container [type="floor"]');
  floors.innerHTML = '';

  let firstFloor = '';

  configuratorSections.forEach((section) => {

    if (+num === section.id) {

      section.plansFromTo.forEach((flr) => {

        let option = document.createElement('option');
        option.setAttribute('value', flr);
        option.innerText = flr;

        floors.append(option);
      });

      firstFloor = section.plansFromTo[0];
    }
  });

  selectFloor(firstFloor)
}
window.floorList = floorList;

function selectFloor(num) {

  let section_id = document.querySelector('.nt-container [type="section"]').value;

  configuratorSections.forEach((section) => {

    if (+section_id === section.id) section.plans.forEach((plan) => {

      if (~plan.floorsFromTo.indexOf(+num)) {

        printMap([plan.size[1],plan.size[0]], plan.plan_filename);

        getEvents(+section_id,+num);
      }
    });
  });
}
window.selectFloor = selectFloor;

function printMap(res,src) {

  let domFloor = document.getElementById('floor');
  domFloor.innerHTML = '';
  let area = [domFloor.offsetWidth,domFloor.clientHeight];

  const iconFeature = new Feature({
    geometry: new Point([1000, 1000]),
  });
  const iconStyle = new Style({
    image: new Icon({
      // anchor: [0, 0],
      // anchorXUnits: 'fraction',
      // anchorYUnits: 'pixels',
      // src: '../test_img/1.jpg',
      src: '../icons/send.svg',
      // size: [500,500],
    }),
  });
  iconFeature.setStyle(iconStyle);
  const vectorSource = new VectorSource({
    features: [iconFeature],
  });
  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });
  const rasterLayer = new TileLayer({
    source: new TileJSON({
      url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
      crossOrigin: '',
    }),
  });

  let extent = [0, 0, res[0], res[1]];
  const projection = new Projection({
    code: 'xkcd-image',
    units: 'pixels',
    extent: extent,
  });
  let map = new Map({
    layers: [
      new ImageLayer({
        source: new Static({
          url: src,
          projection: projection,
          imageExtent: extent,
        }),
      }),rasterLayer, vectorLayer
    ],
    target: 'floor',
    view: new View({
      projection: projection,
      center: getCenter(extent),
      zoom: 1.7,
      maxZoom: 6.5,
    }),
  });
}
window.printMap = printMap;

function getEvents(section_id,floor) {

  /*
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  fetch('../plan/technical-orders-get?configurator_plan_id=' + section_id + '&floor=' + floor, {method: 'GET',headers: myHeaders,redirect: 'follow'})
      .then(response => response.text())
      .then(result => {

        let data = JSON.parse(result);
      })
      .catch(error => console.log('error', error))
  ;
  */

}
