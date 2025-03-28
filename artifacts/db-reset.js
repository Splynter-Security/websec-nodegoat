#!/usr/bin/env nodejs

"use strict";

// This script initializes the database. You can set the environment variable
// before running it (default: development). ie:
// NODE_ENV=production node artifacts/db-reset.js

const { MongoClient } = require("mongodb");
const { db } = require("../config/config");

const USERS_TO_INSERT = [
    {
        "_id": 100,
        "userName": "admin",
        "firstName": "Node Goat",
        "lastName": "Admin",
        "password": "Admin_123"
    },
    {
        "_id": 1,
        "userName": "user1",
        "firstName": "John",
        "lastName": "Smith",
        "benefitStartDate": "2030-01-10",
        "password": "User1_123"
    },
    {
        "_id": 2,
        "userName": "user2",
        "firstName": "Will",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User2_123"
    },
    {
        "_id": 3,
        "userName": "user3",
        "firstName": "Student 3",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User3_123"
    },
    {
        "_id": 4,
        "userName": "user4",
        "firstName": "Student 4",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User4_123"
    },
    {
        "_id": 5,
        "userName": "user5",
        "firstName": "Student 5",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User5_123"
    },
    {
        "_id": 6,
        "userName": "user6",
        "firstName": "Student 6",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User6_123"
    },
    {
        "_id": 7,
        "userName": "user7",
        "firstName": "Student 7",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User7_123"
    },
    {
        "_id": 8,
        "userName": "user8",
        "firstName": "Student 8",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User8_123"
    },
    {
        "_id": 9,
        "userName": "user9",
        "firstName": "Student 9",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User9_123"
    },
    {
        "_id": 10,
        "userName": "user10",
        "firstName": "Student 10",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User10_123"
    },
    {
        "_id": 11,
        "userName": "user11",
        "firstName": "Student 11",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User11_123"
    },
    {
        "_id": 12,
        "userName": "user12",
        "firstName": "Student 12",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User12_123"
    },
    {
        "_id": 13,
        "userName": "user13",
        "firstName": "Student 13",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User13_123"
    },
    {
        "_id": 14,
        "userName": "user14",
        "firstName": "Student 14",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User14_123"
    },
    {
        "_id": 15,
        "userName": "user15",
        "firstName": "Student 15",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User15_123"
    },
    {
        "_id": 16,
        "userName": "user16",
        "firstName": "Student 16",
        "lastName": "Smith",
        "benefitStartDate": "2025-11-30",
        "password": "User16_123"
    },
    {
        "_id": 17,
        "userName": "user17",
        "firstName": "Alex",
        "lastName": "Smith",
        "benefitStartDate": "2026-05-26",
        "password": "User17_123"
    },
    {
        "_id": 18,
        "userName": "user18",
        "firstName": "Casey",
        "lastName": "Smith",
        "benefitStartDate": "2027-04-28",
        "password": "User18_123"
    },
    {
        "_id": 19,
        "userName": "user19",
        "firstName": "Alex",
        "lastName": "Anderson",
        "benefitStartDate": "2027-01-11",
        "password": "User19_123"
    },
    {
        "_id": 20,
        "userName": "user20",
        "firstName": "Casey",
        "lastName": "Wilson",
        "benefitStartDate": "2027-07-31",
        "password": "User20_123"
    },
    {
        "_id": 21,
        "userName": "user21",
        "firstName": "Jamie",
        "lastName": "Martinez",
        "benefitStartDate": "2027-12-22",
        "password": "User21_123"
    },
    {
        "_id": 22,
        "userName": "user22",
        "firstName": "Riley",
        "lastName": "Garcia",
        "benefitStartDate": "2025-06-02",
        "password": "User22_123"
    },
    {
        "_id": 23,
        "userName": "user23",
        "firstName": "Quinn",
        "lastName": "Brown",
        "benefitStartDate": "2026-02-04",
        "password": "User23_123"
    },
    {
        "_id": 24,
        "userName": "user24",
        "firstName": "Jamie",
        "lastName": "Martinez",
        "benefitStartDate": "2026-10-17",
        "password": "User24_123"
    },
    {
        "_id": 25,
        "userName": "user25",
        "firstName": "Jamie",
        "lastName": "Martinez",
        "benefitStartDate": "2027-02-19",
        "password": "User25_123"
    },
    {
        "_id": 26,
        "userName": "user26",
        "firstName": "Casey",
        "lastName": "Garcia",
        "benefitStartDate": "2025-10-29",
        "password": "User26_123"
    },
    {
        "_id": 27,
        "userName": "user27",
        "firstName": "Casey",
        "lastName": "Davis",
        "benefitStartDate": "2026-04-13",
        "password": "User27_123"
    },
    {
        "_id": 28,
        "userName": "user28",
        "firstName": "Morgan",
        "lastName": "Miller",
        "benefitStartDate": "2025-07-24",
        "password": "User28_123"
    },
    {
        "_id": 29,
        "userName": "user29",
        "firstName": "Morgan",
        "lastName": "Anderson",
        "benefitStartDate": "2026-12-01",
        "password": "User29_123"
    },
    {
        "_id": 30,
        "userName": "user30",
        "firstName": "Jordan",
        "lastName": "Wilson",
        "benefitStartDate": "2026-05-02",
        "password": "User30_123"
    },
    {
        "_id": 31,
        "userName": "user31",
        "firstName": "Avery",
        "lastName": "Martinez",
        "benefitStartDate": "2025-10-29",
        "password": "User31_123"
    },
    {
        "_id": 32,
        "userName": "user32",
        "firstName": "Morgan",
        "lastName": "Wilson",
        "benefitStartDate": "2027-09-17",
        "password": "User32_123"
    },
    {
        "_id": 33,
        "userName": "user33",
        "firstName": "Jordan",
        "lastName": "Miller",
        "benefitStartDate": "2026-03-27",
        "password": "User33_123"
    },
    {
        "_id": 34,
        "userName": "user34",
        "firstName": "Jamie",
        "lastName": "Garcia",
        "benefitStartDate": "2026-09-29",
        "password": "User34_123"
    },
    {
        "_id": 35,
        "userName": "user35",
        "firstName": "Casey",
        "lastName": "Garcia",
        "benefitStartDate": "2027-05-26",
        "password": "User35_123"
    },
    {
        "_id": 36,
        "userName": "user36",
        "firstName": "Casey",
        "lastName": "Brown",
        "benefitStartDate": "2027-05-01",
        "password": "User36_123"
    },
    {
        "_id": 37,
        "userName": "user37",
        "firstName": "Avery",
        "lastName": "Davis",
        "benefitStartDate": "2026-08-06",
        "password": "User37_123"
    },
    {
        "_id": 38,
        "userName": "user38",
        "firstName": "Riley",
        "lastName": "Garcia",
        "benefitStartDate": "2026-03-13",
        "password": "User38_123"
    },
    {
        "_id": 39,
        "userName": "user39",
        "firstName": "Sam",
        "lastName": "Lee",
        "benefitStartDate": "2026-02-19",
        "password": "User39_123"
    },
    {
        "_id": 40,
        "userName": "user40",
        "firstName": "Quinn",
        "lastName": "Wilson",
        "benefitStartDate": "2026-01-05",
        "password": "User40_123"
    },
    {
        "_id": 41,
        "userName": "user41",
        "firstName": "Alex",
        "lastName": "Lee",
        "benefitStartDate": "2026-06-26",
        "password": "User41_123"
    },
    {
        "_id": 42,
        "userName": "user42",
        "firstName": "Casey",
        "lastName": "Miller",
        "benefitStartDate": "2026-01-14",
        "password": "User42_123"
    },
    {
        "_id": 43,
        "userName": "user43",
        "firstName": "Avery",
        "lastName": "Garcia",
        "benefitStartDate": "2026-09-07",
        "password": "User43_123"
    },
    {
        "_id": 44,
        "userName": "user44",
        "firstName": "Quinn",
        "lastName": "Wilson",
        "benefitStartDate": "2027-12-10",
        "password": "User44_123"
    },
    {
        "_id": 45,
        "userName": "user45",
        "firstName": "Sam",
        "lastName": "Brown",
        "benefitStartDate": "2026-02-06",
        "password": "User45_123"
    },
    {
        "_id": 46,
        "userName": "user46",
        "firstName": "Quinn",
        "lastName": "Johnson",
        "benefitStartDate": "2026-03-15",
        "password": "User46_123"
    },
    {
        "_id": 47,
        "userName": "user47",
        "firstName": "Quinn",
        "lastName": "Davis",
        "benefitStartDate": "2025-12-10",
        "password": "User47_123"
    },
    {
        "_id": 48,
        "userName": "user48",
        "firstName": "Morgan",
        "lastName": "Davis",
        "benefitStartDate": "2025-05-21",
        "password": "User48_123"
    },
    {
        "_id": 49,
        "userName": "user49",
        "firstName": "Casey",
        "lastName": "Brown",
        "benefitStartDate": "2027-05-15",
        "password": "User49_123"
    },
    {
        "_id": 50,
        "userName": "user50",
        "firstName": "Alex",
        "lastName": "Brown",
        "benefitStartDate": "2026-04-20",
        "password": "User50_123"
    },
    {
        "_id": 51,
        "userName": "user51",
        "firstName": "Casey",
        "lastName": "Wilson",
        "benefitStartDate": "2026-03-26",
        "password": "User51_123"
    },
    {
        "_id": 52,
        "userName": "user52",
        "firstName": "Alex",
        "lastName": "Anderson",
        "benefitStartDate": "2027-04-19",
        "password": "User52_123"
    },
    {
        "_id": 53,
        "userName": "user53",
        "firstName": "Jamie",
        "lastName": "Anderson",
        "benefitStartDate": "2026-10-30",
        "password": "User53_123"
    },
    {
        "_id": 54,
        "userName": "user54",
        "firstName": "Alex",
        "lastName": "Lee",
        "benefitStartDate": "2026-01-22",
        "password": "User54_123"
    },
    {
        "_id": 55,
        "userName": "user55",
        "firstName": "Alex",
        "lastName": "Brown",
        "benefitStartDate": "2025-11-06",
        "password": "User55_123"
    },
    {
        "_id": 56,
        "userName": "user56",
        "firstName": "Avery",
        "lastName": "Anderson",
        "benefitStartDate": "2025-09-13",
        "password": "User56_123"
    },
    {
        "_id": 57,
        "userName": "user57",
        "firstName": "Morgan",
        "lastName": "Brown",
        "benefitStartDate": "2027-09-20",
        "password": "User57_123"
    },
    {
        "_id": 58,
        "userName": "user58",
        "firstName": "Riley",
        "lastName": "Smith",
        "benefitStartDate": "2025-08-16",
        "password": "User58_123"
    },
    {
        "_id": 59,
        "userName": "user59",
        "firstName": "Taylor",
        "lastName": "Wilson",
        "benefitStartDate": "2027-01-07",
        "password": "User59_123"
    },
    {
        "_id": 60,
        "userName": "user60",
        "firstName": "Alex",
        "lastName": "Lee",
        "benefitStartDate": "2027-11-14",
        "password": "User60_123"
    },
    {
        "_id": 61,
        "userName": "user61",
        "firstName": "Alex",
        "lastName": "Brown",
        "benefitStartDate": "2026-02-17",
        "password": "User61_123"
    },
    {
        "_id": 62,
        "userName": "user62",
        "firstName": "Casey",
        "lastName": "Anderson",
        "benefitStartDate": "2025-04-24",
        "password": "User62_123"
    },
    {
        "_id": 63,
        "userName": "user63",
        "firstName": "Taylor",
        "lastName": "Wilson",
        "benefitStartDate": "2025-11-18",
        "password": "User63_123"
    },
    {
        "_id": 64,
        "userName": "user64",
        "firstName": "Avery",
        "lastName": "Martinez",
        "benefitStartDate": "2027-08-13",
        "password": "User64_123"
    },
    {
        "_id": 65,
        "userName": "user65",
        "firstName": "Avery",
        "lastName": "Martinez",
        "benefitStartDate": "2026-05-21",
        "password": "User65_123"
    },
    {
        "_id": 66,
        "userName": "user66",
        "firstName": "Jamie",
        "lastName": "Davis",
        "benefitStartDate": "2026-04-11",
        "password": "User66_123"
    },
    {
        "_id": 67,
        "userName": "user67",
        "firstName": "Avery",
        "lastName": "Davis",
        "benefitStartDate": "2025-04-17",
        "password": "User67_123"
    },
    {
        "_id": 68,
        "userName": "user68",
        "firstName": "Taylor",
        "lastName": "Johnson",
        "benefitStartDate": "2025-08-20",
        "password": "User68_123"
    },
    {
        "_id": 69,
        "userName": "user69",
        "firstName": "Morgan",
        "lastName": "Davis",
        "benefitStartDate": "2026-08-17",
        "password": "User69_123"
    },
    {
        "_id": 70,
        "userName": "user70",
        "firstName": "Quinn",
        "lastName": "Miller",
        "benefitStartDate": "2026-05-12",
        "password": "User70_123"
    },
    {
        "_id": 71,
        "userName": "user71",
        "firstName": "Alex",
        "lastName": "Lee",
        "benefitStartDate": "2026-08-08",
        "password": "User71_123"
    },
    {
        "_id": 72,
        "userName": "user72",
        "firstName": "Quinn",
        "lastName": "Garcia",
        "benefitStartDate": "2027-11-13",
        "password": "User72_123"
    },
    {
        "_id": 73,
        "userName": "user73",
        "firstName": "Alex",
        "lastName": "Smith",
        "benefitStartDate": "2026-09-22",
        "password": "User73_123"
    },
    {
        "_id": 74,
        "userName": "user74",
        "firstName": "Jordan",
        "lastName": "Anderson",
        "benefitStartDate": "2026-06-26",
        "password": "User74_123"
    },
    {
        "_id": 75,
        "userName": "user75",
        "firstName": "Alex",
        "lastName": "Anderson",
        "benefitStartDate": "2025-07-15",
        "password": "User75_123"
    },
    {
        "_id": 76,
        "userName": "user76",
        "firstName": "Avery",
        "lastName": "Wilson",
        "benefitStartDate": "2026-10-25",
        "password": "User76_123"
    },
    {
        "_id": 77,
        "userName": "user77",
        "firstName": "Morgan",
        "lastName": "Miller",
        "benefitStartDate": "2025-12-23",
        "password": "User77_123"
    },
    {
        "_id": 78,
        "userName": "user78",
        "firstName": "Taylor",
        "lastName": "Garcia",
        "benefitStartDate": "2025-05-07",
        "password": "User78_123"
    },
    {
        "_id": 79,
        "userName": "user79",
        "firstName": "Riley",
        "lastName": "Smith",
        "benefitStartDate": "2025-12-29",
        "password": "User79_123"
    },
    {
        "_id": 80,
        "userName": "user80",
        "firstName": "Riley",
        "lastName": "Lee",
        "benefitStartDate": "2026-02-23",
        "password": "User80_123"
    },
    {
        "_id": 81,
        "userName": "user81",
        "firstName": "Jordan",
        "lastName": "Wilson",
        "benefitStartDate": "2025-11-20",
        "password": "User81_123"
    },
    {
        "_id": 82,
        "userName": "user82",
        "firstName": "Sam",
        "lastName": "Wilson",
        "benefitStartDate": "2027-01-10",
        "password": "User82_123"
    },
    {
        "_id": 83,
        "userName": "user83",
        "firstName": "Avery",
        "lastName": "Johnson",
        "benefitStartDate": "2027-03-12",
        "password": "User83_123"
    },
    {
        "_id": 84,
        "userName": "user84",
        "firstName": "Riley",
        "lastName": "Smith",
        "benefitStartDate": "2026-07-31",
        "password": "User84_123"
    },
    {
        "_id": 85,
        "userName": "user85",
        "firstName": "Casey",
        "lastName": "Smith",
        "benefitStartDate": "2026-10-23",
        "password": "User85_123"
    },
    {
        "_id": 86,
        "userName": "user86",
        "firstName": "Taylor",
        "lastName": "Garcia",
        "benefitStartDate": "2027-11-28",
        "password": "User86_123"
    },
    {
        "_id": 87,
        "userName": "user87",
        "firstName": "Jamie",
        "lastName": "Anderson",
        "benefitStartDate": "2026-07-28",
        "password": "User87_123"
    },
    {
        "_id": 88,
        "userName": "user88",
        "firstName": "Jamie",
        "lastName": "Johnson",
        "benefitStartDate": "2027-08-23",
        "password": "User88_123"
    },
    {
        "_id": 89,
        "userName": "user89",
        "firstName": "Jordan",
        "lastName": "Davis",
        "benefitStartDate": "2027-02-01",
        "password": "User89_123"
    },
    {
        "_id": 90,
        "userName": "user90",
        "firstName": "Morgan",
        "lastName": "Wilson",
        "benefitStartDate": "2025-10-04",
        "password": "User90_123"
    },
    {
        "_id": 91,
        "userName": "user91",
        "firstName": "Quinn",
        "lastName": "Brown",
        "benefitStartDate": "2026-07-08",
        "password": "User91_123"
    },
    {
        "_id": 92,
        "userName": "user92",
        "firstName": "Taylor",
        "lastName": "Johnson",
        "benefitStartDate": "2025-12-15",
        "password": "User92_123"
    },
    {
        "_id": 93,
        "userName": "user93",
        "firstName": "Alex",
        "lastName": "Davis",
        "benefitStartDate": "2027-08-25",
        "password": "User93_123"
    },
    {
        "_id": 94,
        "userName": "user94",
        "firstName": "Sam",
        "lastName": "Martinez",
        "benefitStartDate": "2026-05-27",
        "password": "User94_123"
    },
    {
        "_id": 95,
        "userName": "user95",
        "firstName": "Taylor",
        "lastName": "Wilson",
        "benefitStartDate": "2025-09-04",
        "password": "User95_123"
    },
    {
        "_id": 96,
        "userName": "user96",
        "firstName": "Quinn",
        "lastName": "Garcia",
        "benefitStartDate": "2025-08-26",
        "password": "User96_123"
    },
    {
        "_id": 97,
        "userName": "user97",
        "firstName": "Avery",
        "lastName": "Johnson",
        "benefitStartDate": "2027-11-15",
        "password": "User97_123"
    },
    {
        "_id": 98,
        "userName": "user98",
        "firstName": "Jordan",
        "lastName": "Miller",
        "benefitStartDate": "2027-04-03",
        "password": "User98_123"
    },
    {
        "_id": 99,
        "userName": "user99",
        "firstName": "Jordan",
        "lastName": "Wilson",
        "benefitStartDate": "2027-01-28",
        "password": "User99_123"
    },
    {
        "_id": 101,
        "userName": "user101",
        "firstName": "Jamie",
        "lastName": "Wilson",
        "benefitStartDate": "2026-05-24",
        "password": "User101_123"
    },
    {
        "_id": 102,
        "userName": "user102",
        "firstName": "Riley",
        "lastName": "Martinez",
        "benefitStartDate": "2026-04-18",
        "password": "User102_123"
    },
    {
        "_id": 103,
        "userName": "user103",
        "firstName": "Jordan",
        "lastName": "Davis",
        "benefitStartDate": "2027-06-10",
        "password": "User103_123"
    },
    {
        "_id": 104,
        "userName": "user104",
        "firstName": "Sam",
        "lastName": "Johnson",
        "benefitStartDate": "2025-07-13",
        "password": "User104_123"
    },
    {
        "_id": 105,
        "userName": "user105",
        "firstName": "Morgan",
        "lastName": "Davis",
        "benefitStartDate": "2026-10-14",
        "password": "User105_123"
    },
    {
        "_id": 106,
        "userName": "user106",
        "firstName": "Alex",
        "lastName": "Martinez",
        "benefitStartDate": "2025-11-19",
        "password": "User106_123"
    },
    {
        "_id": 107,
        "userName": "user107",
        "firstName": "Alex",
        "lastName": "Garcia",
        "benefitStartDate": "2026-09-10",
        "password": "User107_123"
    },
    {
        "_id": 108,
        "userName": "user108",
        "firstName": "Jamie",
        "lastName": "Miller",
        "benefitStartDate": "2025-10-11",
        "password": "User108_123"
    },
    {
        "_id": 109,
        "userName": "user109",
        "firstName": "Taylor",
        "lastName": "Wilson",
        "benefitStartDate": "2025-09-16",
        "password": "User109_123"
    },
    {
        "_id": 110,
        "userName": "user110",
        "firstName": "Jordan",
        "lastName": "Davis",
        "benefitStartDate": "2025-11-10",
        "password": "User110_123"
    },
    {
        "_id": 111,
        "userName": "user111",
        "firstName": "Taylor",
        "lastName": "Johnson",
        "benefitStartDate": "2025-09-17",
        "password": "User111_123"
    },
    {
        "_id": 112,
        "userName": "user112",
        "firstName": "Jamie",
        "lastName": "Garcia",
        "benefitStartDate": "2026-10-06",
        "password": "User112_123"
    },
    {
        "_id": 113,
        "userName": "user113",
        "firstName": "Taylor",
        "lastName": "Johnson",
        "benefitStartDate": "2026-08-29",
        "password": "User113_123"
    },
    {
        "_id": 114,
        "userName": "user114",
        "firstName": "Taylor",
        "lastName": "Brown",
        "benefitStartDate": "2026-10-05",
        "password": "User114_123"
    },
    {
        "_id": 115,
        "userName": "user115",
        "firstName": "Avery",
        "lastName": "Johnson",
        "benefitStartDate": "2027-10-10",
        "password": "User115_123"
    },
    {
        "_id": 116,
        "userName": "user116",
        "firstName": "Casey",
        "lastName": "Johnson",
        "benefitStartDate": "2025-06-08",
        "password": "User116_123"
    },
    {
        "_id": 117,
        "userName": "user117",
        "firstName": "Riley",
        "lastName": "Smith",
        "benefitStartDate": "2026-11-05",
        "password": "User117_123"
    },
    {
        "_id": 118,
        "userName": "user118",
        "firstName": "Jordan",
        "lastName": "Johnson",
        "benefitStartDate": "2025-05-15",
        "password": "User118_123"
    },
    {
        "_id": 119,
        "userName": "user119",
        "firstName": "Quinn",
        "lastName": "Garcia",
        "benefitStartDate": "2025-04-03",
        "password": "User119_123"
    },
    {
        "_id": 120,
        "userName": "user120",
        "firstName": "Morgan",
        "lastName": "Brown",
        "benefitStartDate": "2027-01-08",
        "password": "User120_123"
    },
    {
        "_id": 121,
        "userName": "user121",
        "firstName": "Jordan",
        "lastName": "Miller",
        "benefitStartDate": "2027-07-20",
        "password": "User121_123"
    },
    {
        "_id": 122,
        "userName": "user122",
        "firstName": "Morgan",
        "lastName": "Garcia",
        "benefitStartDate": "2026-02-10",
        "password": "User122_123"
    },
    {
        "_id": 123,
        "userName": "user123",
        "firstName": "Casey",
        "lastName": "Davis",
        "benefitStartDate": "2025-08-11",
        "password": "User123_123"
    },
    {
        "_id": 124,
        "userName": "user124",
        "firstName": "Alex",
        "lastName": "Lee",
        "benefitStartDate": "2027-05-30",
        "password": "User124_123"
    },
    {
        "_id": 125,
        "userName": "user125",
        "firstName": "Jamie",
        "lastName": "Davis",
        "benefitStartDate": "2026-02-07",
        "password": "User125_123"
    },
    {
        "_id": 126,
        "userName": "user126",
        "firstName": "Avery",
        "lastName": "Davis",
        "benefitStartDate": "2027-08-05",
        "password": "User126_123"
    },
    {
        "_id": 127,
        "userName": "user127",
        "firstName": "Jordan",
        "lastName": "Martinez",
        "benefitStartDate": "2027-07-14",
        "password": "User127_123"
    },
    {
        "_id": 128,
        "userName": "user128",
        "firstName": "Riley",
        "lastName": "Garcia",
        "benefitStartDate": "2026-01-31",
        "password": "User128_123"
    },
    {
        "_id": 129,
        "userName": "user129",
        "firstName": "Jamie",
        "lastName": "Miller",
        "benefitStartDate": "2026-10-03",
        "password": "User129_123"
    },
    {
        "_id": 130,
        "userName": "user130",
        "firstName": "Taylor",
        "lastName": "Davis",
        "benefitStartDate": "2026-03-29",
        "password": "User130_123"
    },
    {
        "_id": 131,
        "userName": "user131",
        "firstName": "Taylor",
        "lastName": "Lee",
        "benefitStartDate": "2026-08-02",
        "password": "User131_123"
    },
    {
        "_id": 132,
        "userName": "user132",
        "firstName": "Avery",
        "lastName": "Davis",
        "benefitStartDate": "2027-03-02",
        "password": "User132_123"
    },
    {
        "_id": 133,
        "userName": "user133",
        "firstName": "Avery",
        "lastName": "Wilson",
        "benefitStartDate": "2027-06-18",
        "password": "User133_123"
    },
    {
        "_id": 134,
        "userName": "user134",
        "firstName": "Sam",
        "lastName": "Anderson",
        "benefitStartDate": "2026-07-01",
        "password": "User134_123"
    },
    {
        "_id": 135,
        "userName": "user135",
        "firstName": "Morgan",
        "lastName": "Brown",
        "benefitStartDate": "2025-09-23",
        "password": "User135_123"
    },
    {
        "_id": 136,
        "userName": "user136",
        "firstName": "Jamie",
        "lastName": "Smith",
        "benefitStartDate": "2026-09-04",
        "password": "User136_123"
    },
    {
        "_id": 137,
        "userName": "user137",
        "firstName": "Riley",
        "lastName": "Wilson",
        "benefitStartDate": "2026-05-08",
        "password": "User137_123"
    },
    {
        "_id": 138,
        "userName": "user138",
        "firstName": "Quinn",
        "lastName": "Brown",
        "benefitStartDate": "2027-09-03",
        "password": "User138_123"
    },
    {
        "_id": 139,
        "userName": "user139",
        "firstName": "Avery",
        "lastName": "Wilson",
        "benefitStartDate": "2027-12-09",
        "password": "User139_123"
    },
    {
        "_id": 140,
        "userName": "user140",
        "firstName": "Alex",
        "lastName": "Miller",
        "benefitStartDate": "2027-03-11",
        "password": "User140_123"
    },
    {
        "_id": 141,
        "userName": "user141",
        "firstName": "Jordan",
        "lastName": "Wilson",
        "benefitStartDate": "2026-12-28",
        "password": "User141_123"
    },
    {
        "_id": 142,
        "userName": "user142",
        "firstName": "Jamie",
        "lastName": "Anderson",
        "benefitStartDate": "2026-02-27",
        "password": "User142_123"
    },
    {
        "_id": 143,
        "userName": "user143",
        "firstName": "Riley",
        "lastName": "Davis",
        "benefitStartDate": "2026-03-24",
        "password": "User143_123"
    },
    {
        "_id": 144,
        "userName": "user144",
        "firstName": "Jordan",
        "lastName": "Wilson",
        "benefitStartDate": "2026-07-28",
        "password": "User144_123"
    },
    {
        "_id": 145,
        "userName": "user145",
        "firstName": "Morgan",
        "lastName": "Smith",
        "benefitStartDate": "2025-06-12",
        "password": "User145_123"
    },
    {
        "_id": 146,
        "userName": "user146",
        "firstName": "Alex",
        "lastName": "Wilson",
        "benefitStartDate": "2027-11-03",
        "password": "User146_123"
    },
    {
        "_id": 147,
        "userName": "user147",
        "firstName": "Jamie",
        "lastName": "Wilson",
        "benefitStartDate": "2025-06-02",
        "password": "User147_123"
    },
    {
        "_id": 148,
        "userName": "user148",
        "firstName": "Quinn",
        "lastName": "Lee",
        "benefitStartDate": "2026-10-30",
        "password": "User148_123"
    },
    {
        "_id": 149,
        "userName": "user149",
        "firstName": "Jordan",
        "lastName": "Anderson",
        "benefitStartDate": "2026-04-27",
        "password": "User149_123"
    },
    {
        "_id": 150,
        "userName": "user150",
        "firstName": "Jordan",
        "lastName": "Garcia",
        "benefitStartDate": "2027-11-24",
        "password": "User150_123"
    }
];
    
    const tryDropCollection = (db, name) => {
    return new Promise((resolve, reject) => {
        db.dropCollection(name, (err, data) => {
            if (!err) {
                console.log(`Dropped collection: ${name}`);
            }
            resolve(undefined);
        });
    });
};

const parseResponse = (err, res, comm) => {
    if (err) {
        console.log("ERROR:");
        console.log(comm);
        console.log(JSON.stringify(err));
        process.exit(1);
    }
    console.log(comm);
    console.log(JSON.stringify(res));
};


// Starting here
MongoClient.connect(db, (err, db) =>  {
    if (err) {
        console.log("ERROR: connect");
        console.log(JSON.stringify(err));
        process.exit(1);
    }
    console.log("Connected to the database");

    const collectionNames = [
        "users",
        "allocations",
        "contributions",
        "memos",
        "counters"
    ];

    // remove existing data (if any), we don't want to look for errors here
    console.log("Dropping existing collections");
    const dropPromises = collectionNames.map((name) => tryDropCollection(db, name));

    // Wait for all drops to finish (or fail) before continuing
    Promise.all(dropPromises).then(() => {
        const usersCol = db.collection("users");
        const allocationsCol = db.collection("allocations");
        const countersCol = db.collection("counters");

        // reset unique id counter
        countersCol.insert({
            _id: "userId",
            seq: 18
        }, (err, data) => {
            parseResponse(err, data, "countersCol.insert");
        });

        // insert admin and test users
        console.log("Users to insert:");
        USERS_TO_INSERT.forEach((user) => console.log(JSON.stringify(user)));

        usersCol.insertMany(USERS_TO_INSERT, (err, data) => {
            const finalAllocations = [];

            // We can't continue if error here
            if (err) {
                console.log("ERROR: insertMany");
                console.log(JSON.stringify(err));
                process.exit(1);
            }
            parseResponse(err, data, "users.insertMany");

            data.ops.forEach((user) => {
                const stocks = Math.floor((Math.random() * 40) + 1);
                const funds = Math.floor((Math.random() * 40) + 1);

                finalAllocations.push({
                    userId: user._id,
                    stocks: stocks,
                    funds: funds,
                    bonds: 100 - (stocks + funds)
                });
            });

            console.log("Allocations to insert:");
            finalAllocations.forEach(allocation => console.log(JSON.stringify(allocation)));

            allocationsCol.insertMany(finalAllocations, (err, data) => {
                parseResponse(err, data, "allocations.insertMany");
                console.log("Database reset performed successfully");
                process.exit(0);
            });

        });
    });
});
