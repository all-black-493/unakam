SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '66283578-3bb1-4a2d-ab8a-d6a04e2c1e0b', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"justinjerome401@gmail.com","user_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","user_phone":""}}', '2025-06-09 16:03:25.305635+00', ''),
	('00000000-0000-0000-0000-000000000000', '9659f43e-4076-41bf-a3a7-5cfbfad1f2c1', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-09 17:08:01.058534+00', ''),
	('00000000-0000-0000-0000-000000000000', '02a717fb-cbdc-4c9c-8ee0-147b72c0ca3f', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-09 17:25:15.247055+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd06b93f0-4e45-4611-9909-c98d0badfa66', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-09 18:37:10.201939+00', ''),
	('00000000-0000-0000-0000-000000000000', '1a992995-3130-48ff-99df-0a2410923b1d', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-09 18:37:10.20493+00', ''),
	('00000000-0000-0000-0000-000000000000', '6fe3c854-b34f-4452-a365-c2170b8021fd', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-09 18:37:48.681661+00', ''),
	('00000000-0000-0000-0000-000000000000', '5027d427-a4ff-4d86-ab15-3c8bccc10924', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-10 01:16:23.17843+00', ''),
	('00000000-0000-0000-0000-000000000000', '1399f415-7417-46d2-8bbd-dab51823202e', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-10 01:30:18.847858+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dfcd3e8f-27a2-4d6c-bc52-15f151f1f275', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-10 12:35:30.018326+00', ''),
	('00000000-0000-0000-0000-000000000000', '1f8afe44-a4cf-440a-974d-9ad2c895e148', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-10 12:35:30.021077+00', ''),
	('00000000-0000-0000-0000-000000000000', '4983736b-8c5a-4a3d-8037-b2bfeb619ae5', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-10 14:14:17.124989+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c40961e-0296-4e7a-9b8a-5651d85101d9', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-10 14:21:36.609833+00', ''),
	('00000000-0000-0000-0000-000000000000', '7ac4af36-3f3c-4e27-95e4-ce0508254e8c', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-10 14:28:37.325605+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ffe033a1-2643-4fe2-8460-2c150a9c378d', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 13:15:20.449177+00', ''),
	('00000000-0000-0000-0000-000000000000', 'adfb301b-666b-4450-80c9-eb631b2fa6b3', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 13:15:20.451333+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bff98e89-6833-4fa8-aa3a-fa0135e9dc8b', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 13:24:43.137589+00', ''),
	('00000000-0000-0000-0000-000000000000', '15232c57-d49a-4f05-b242-402487ff3e6a', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 13:25:05.790231+00', ''),
	('00000000-0000-0000-0000-000000000000', '9129a4d7-9bb0-4630-8ace-bcfc4f27d94b', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 13:25:07.439436+00', ''),
	('00000000-0000-0000-0000-000000000000', '1916b06b-09f7-4658-bee3-5a4d17596f6e', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 13:25:07.617574+00', ''),
	('00000000-0000-0000-0000-000000000000', '78475e0e-0b41-4ad9-8994-1b3551bd5cbc', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 13:25:09.184732+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f81a1548-d1d7-45d4-be59-46ff4fa2119e', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 13:25:10.092848+00', ''),
	('00000000-0000-0000-0000-000000000000', '84e86c2b-7357-4aee-b20e-151a076ad99e', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 13:25:45.511862+00', ''),
	('00000000-0000-0000-0000-000000000000', '45dc8cf2-4fbb-4552-b742-3da6455bae50', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 14:18:09.775364+00', ''),
	('00000000-0000-0000-0000-000000000000', '6467fcd4-3d0c-4671-a9ae-04da309d1da0', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:07:48.708989+00', ''),
	('00000000-0000-0000-0000-000000000000', '5bf19038-f06c-4b6d-8cd5-57663efc6535', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:07:53.287861+00', ''),
	('00000000-0000-0000-0000-000000000000', '79464078-0ee6-4640-b92a-4676bae0c1ab', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:18.760682+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dcc8db63-07ae-40b3-935d-82c8fe6cd085', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:19.134387+00', ''),
	('00000000-0000-0000-0000-000000000000', '93ea140d-d444-4e2f-ba0d-1084ffe98919', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:19.604412+00', ''),
	('00000000-0000-0000-0000-000000000000', '5c3fa798-19f2-4ccf-99e2-b85d1218a63d', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:20.787256+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a2d290c0-6876-4dc6-893e-296b9024255f', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:21.014012+00', ''),
	('00000000-0000-0000-0000-000000000000', 'af7e28b1-3fd3-4c18-b713-6588c9d7978b', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:21.67897+00', ''),
	('00000000-0000-0000-0000-000000000000', '672c06ff-6241-496b-a3aa-4483a22c1692', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:24.137834+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dde339c6-1192-4fe3-bdb7-773f903acc01', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:24.560462+00', ''),
	('00000000-0000-0000-0000-000000000000', '7077d3b8-b6ec-448c-b05f-9cbee23f9f96', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:45.077548+00', ''),
	('00000000-0000-0000-0000-000000000000', '0b894074-fba1-4912-a538-f703723ceba6', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:08:45.528054+00', ''),
	('00000000-0000-0000-0000-000000000000', '2c91ad3b-c0c3-49f4-9166-6f4081a64b73', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:10:11.540659+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b7f32b52-1e19-4dae-9b96-f2badaf3623a', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:14:23.832987+00', ''),
	('00000000-0000-0000-0000-000000000000', '6584f17f-b1b1-4422-b266-f59650ebc96e', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:14:25.610166+00', ''),
	('00000000-0000-0000-0000-000000000000', '8df741fe-8936-4f8f-ba5c-4b178f70a640', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:14:26.785753+00', ''),
	('00000000-0000-0000-0000-000000000000', '8a3661f8-0a9d-4f29-b3ab-6d84826ba594', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:14:26.827882+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e3f2d519-15b6-47cd-a432-71dc7c2bb9be', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:15:57.187823+00', ''),
	('00000000-0000-0000-0000-000000000000', '42f34a15-9868-4cf1-8824-5d3a01167c1a', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:15:59.44081+00', ''),
	('00000000-0000-0000-0000-000000000000', '837dbf60-cfbf-41ab-99b0-ac218e794aa1', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:15:59.655809+00', ''),
	('00000000-0000-0000-0000-000000000000', '9918e870-c441-4af8-8aec-d583ae5919e6', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:16:01.237131+00', ''),
	('00000000-0000-0000-0000-000000000000', '26b63e36-aa14-4c2f-83c4-9480c425e274', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:16:07.54877+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ec482c2c-3864-41d5-8573-40796f41170d', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:16:10.674337+00', ''),
	('00000000-0000-0000-0000-000000000000', '1a47ecf5-d58e-46a6-866a-57a388262d9c', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-11 15:16:36.515554+00', ''),
	('00000000-0000-0000-0000-000000000000', '0d9f5eea-81e3-417f-aafb-e1caa37a8241', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 16:16:46.563657+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c1801c4f-b868-4135-9e76-7246933e0510', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 16:16:46.566874+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a07614a6-8002-448d-a2a3-030b07fa2ea2', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 17:20:43.874034+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f0ae4b6c-dc66-4f65-84a0-277a23d411ea', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 17:20:43.876811+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eda82c33-0d0c-488e-8952-2992875ed2a0', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 18:28:38.336966+00', ''),
	('00000000-0000-0000-0000-000000000000', '776d253f-d0ee-4e33-840f-4a2c9be6e2a3', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 18:28:38.339164+00', ''),
	('00000000-0000-0000-0000-000000000000', '4cc13707-06af-4a79-a9d7-2936f717be5c', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 22:14:15.104349+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a90e67cb-cd55-4e98-9d66-4d5f6ff977af', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 22:14:15.106474+00', ''),
	('00000000-0000-0000-0000-000000000000', '725bc6eb-ac86-4910-84b8-9e00bd36223d', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 23:46:14.106896+00', ''),
	('00000000-0000-0000-0000-000000000000', '25647143-f1fd-41cb-9cd6-2f123679d196', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-11 23:46:14.109599+00', ''),
	('00000000-0000-0000-0000-000000000000', '8f60f944-66a2-46b0-b0c5-1dbfc2e03bf9', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-12 09:53:31.625811+00', ''),
	('00000000-0000-0000-0000-000000000000', '99ddb86d-02ba-425a-b75e-55a14c4eb01b', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-12 09:53:31.628808+00', ''),
	('00000000-0000-0000-0000-000000000000', '20602d82-54de-4e8e-b5a4-03d53f9a0eb0', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 09:53:53.168879+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aea6b404-6429-4b39-a159-03ac107c2f3f', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 10:01:00.944916+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f3ddaa65-f539-4e93-9efc-1b5c6a74d4d9', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 10:01:22.603777+00', ''),
	('00000000-0000-0000-0000-000000000000', '5b580af4-4ba1-4407-96c2-76798fb158cb', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 10:27:21.536989+00', ''),
	('00000000-0000-0000-0000-000000000000', '8f982c3d-04fe-4f75-b35b-810c3ad96daa', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 10:27:32.486089+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c4f32139-86e5-4b3b-a26c-1111b48d792d', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 14:10:51.956372+00', ''),
	('00000000-0000-0000-0000-000000000000', '24d7a47f-5f44-4edf-babf-c38ca34b4842', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 14:11:08.319095+00', ''),
	('00000000-0000-0000-0000-000000000000', '4306fcd7-645a-466b-8da7-120054c8f232', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 14:11:35.414479+00', ''),
	('00000000-0000-0000-0000-000000000000', 'edadf6eb-7c8f-44ed-9ac3-c1002b9d7d0c', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 14:14:23.769302+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ec616150-dd89-42f1-b34e-37990576eb60', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 14:15:11.067635+00', ''),
	('00000000-0000-0000-0000-000000000000', '748e9226-c9cd-4046-960a-96dfa8aa019f', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 14:15:48.660065+00', ''),
	('00000000-0000-0000-0000-000000000000', '076c7fe7-e890-4742-9651-30c159741c24', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 14:16:05.103081+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd17555f1-99f2-409e-ac01-581162c8b331', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 14:24:12.793719+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e518519b-12da-4214-bf6e-416467925e1e', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 16:18:41.732385+00', ''),
	('00000000-0000-0000-0000-000000000000', '1aef5ed8-0b11-4ba6-9883-51e9d45ec1a2', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 16:34:39.442807+00', ''),
	('00000000-0000-0000-0000-000000000000', '9efa35ed-2df2-42cc-8180-f44f6ec5212a', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 16:35:11.675022+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c789cec3-4d68-4a52-9bcb-24afdc35d5bc', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 16:35:23.162846+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4eaf274-dd0d-4932-913b-6a3c7b40d30d', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 16:47:28.965842+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e905678-5ae9-46c6-a57c-16938be0fbb5', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 18:47:50.972937+00', ''),
	('00000000-0000-0000-0000-000000000000', '9db89f47-3713-4b9a-a2e5-376b8f0537cc', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 18:53:40.975824+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ea228db-3db2-4d69-8700-776ff0a242bf', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 23:41:13.998849+00', ''),
	('00000000-0000-0000-0000-000000000000', '8e4fae63-9e7f-43c2-8f81-5d2c29d498db', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-13 01:11:25.64622+00', ''),
	('00000000-0000-0000-0000-000000000000', '51e2d20f-24ff-4d35-aad6-a36e60c2e7cb', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 01:14:09.208927+00', ''),
	('00000000-0000-0000-0000-000000000000', '50bda3e6-91e6-4d3c-877a-28ef625db9c9', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-13 01:26:51.74175+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b40462a3-37c8-4509-a867-ab3378c38983', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 01:28:39.038622+00', ''),
	('00000000-0000-0000-0000-000000000000', '41683f6a-0d3e-4471-84d6-d997d934f2f0', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-13 09:08:32.897043+00', ''),
	('00000000-0000-0000-0000-000000000000', 'db591f4a-5f5d-4895-b1a0-d26969a5680e', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-13 09:08:32.900982+00', ''),
	('00000000-0000-0000-0000-000000000000', '1e59b6ca-f2d3-4200-bdc2-e6052bca38c9', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-13 09:08:33.040126+00', ''),
	('00000000-0000-0000-0000-000000000000', '0d32be7d-a489-4e46-8584-db5ca91b77e5', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 09:54:49.322405+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ee69a9e-424e-4fab-9087-b9a33a8182b8', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 09:58:06.135671+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0a5ee7b-9806-4d70-b0e1-22bbef80c2cd', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 10:25:34.843664+00', ''),
	('00000000-0000-0000-0000-000000000000', '36529240-56f0-4bbe-9e33-fa17cc7a4e3e', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 10:28:47.78081+00', ''),
	('00000000-0000-0000-0000-000000000000', '4f294e5f-3837-4a07-9bc0-b3acd7a05183', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 10:55:26.487695+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a09ce063-e02e-41f3-b38e-dd519d8e6e32', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 10:55:42.877015+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f3608736-8915-4f31-b1d9-714fdd1a045d', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 10:56:24.971991+00', ''),
	('00000000-0000-0000-0000-000000000000', '34a74b12-07f7-4a19-901f-16cdb2055478', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 10:56:36.811842+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bc5fb99a-6fa7-494f-a5df-94f2d945eae2', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-13 11:53:49.075456+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c2997cea-4460-4e4b-bcd2-e677954b790b', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 11:54:23.092036+00', ''),
	('00000000-0000-0000-0000-000000000000', '527709ba-9f67-4487-a9a4-b4e3d09f2040', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 12:17:24.540501+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c57d8483-8145-4d0d-911b-1dd6d0d67c23', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 12:17:40.649886+00', ''),
	('00000000-0000-0000-0000-000000000000', '69dd4dae-0cb0-4869-a608-36cc95c586f9', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 12:18:48.689371+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ee6eb989-2b2b-4927-9699-3413ecf6bcd3', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 12:18:56.069897+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0cb2b09-e183-4aab-ba98-cacaa6036288', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 12:26:00.738821+00', ''),
	('00000000-0000-0000-0000-000000000000', '4c08f846-20d6-4548-becb-65b87c94e4c4', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 12:26:09.467011+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dcef4c75-e8fd-4d51-89c4-8631d9cc94b0', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 13:40:56.298748+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e3194cb-f0c5-416c-9efb-437e8ed95a73', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 13:41:04.684632+00', ''),
	('00000000-0000-0000-0000-000000000000', '1e283541-14d9-4d78-be2d-dde74add69e8', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 13:49:11.618832+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ad6570ce-4936-479f-8d46-d8793ba1ed24', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 13:49:31.455598+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bb656f6b-2857-40fe-9dc0-ab0d83ffaa61', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 13:50:20.02901+00', ''),
	('00000000-0000-0000-0000-000000000000', '81b990cd-fcd6-498d-8f67-d662aee36348', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 13:50:57.963715+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd6b9c7cd-dcd7-4d63-9544-6109a45c94ab', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 13:57:50.798529+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cc0eff70-01c8-4711-9619-dc73935bef52', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 14:01:08.921989+00', ''),
	('00000000-0000-0000-0000-000000000000', '66617ba7-35d4-43c6-82b4-5ab7d9a82381', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 15:04:13.469379+00', ''),
	('00000000-0000-0000-0000-000000000000', '16bf1895-1816-44cd-b986-870368eda656', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 15:04:21.906887+00', ''),
	('00000000-0000-0000-0000-000000000000', '43a55230-be0d-4667-a110-19d173e3d9eb', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 15:20:39.795463+00', ''),
	('00000000-0000-0000-0000-000000000000', '4745b3eb-a7ea-45a7-b9a6-87709b487b9b', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 15:20:49.360975+00', ''),
	('00000000-0000-0000-0000-000000000000', '1b79c347-58ca-4b93-873c-901a841963db', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 16:08:28.965101+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ecc10c8a-0ef2-4110-8d92-6f91663d49d4', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 16:08:37.572115+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e38cd736-0d8d-4ad0-ae4f-660819d28eb5', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 16:50:09.189619+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ec95fa0-0b5b-488c-8aef-5a17c5b55372', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 16:51:11.053245+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bad05c45-f796-4240-9164-b45547252d5f', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 16:53:25.88924+00', ''),
	('00000000-0000-0000-0000-000000000000', '2572218d-48ec-40d3-8b4b-eac04d77599d', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 23:10:55.940411+00', ''),
	('00000000-0000-0000-0000-000000000000', 'acf292ce-ff91-45f1-b2c8-6bd0a575bb2f', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 23:12:42.528601+00', ''),
	('00000000-0000-0000-0000-000000000000', '516d07cd-9c5a-455c-958b-814e6feeb3e8', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 23:55:38.581906+00', ''),
	('00000000-0000-0000-0000-000000000000', '4d1a4bf8-95cb-4c5f-ad6c-1216185f4ab6', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 00:08:28.964595+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e1bd110-afe0-4de2-8c8d-5ad2ba24f02b', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 00:20:14.91387+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ad647d9c-031a-411f-85e8-2aa2fbc79885', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 00:22:35.296742+00', ''),
	('00000000-0000-0000-0000-000000000000', '2c28c66c-59f0-453e-af0d-1d7f0a57e634', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-16 00:22:45.768078+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ca415b5-0707-4b62-b3d1-0a22a99b38bd', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 00:24:47.092225+00', ''),
	('00000000-0000-0000-0000-000000000000', '94ca731c-fd02-4c70-9d1c-a7e31145f406', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-16 00:24:56.969309+00', ''),
	('00000000-0000-0000-0000-000000000000', '78cf6aae-5232-4c2e-9d40-b4d67d457dcd', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-16 00:46:28.647939+00', ''),
	('00000000-0000-0000-0000-000000000000', '7d8beec9-18b4-48a4-aaaa-c46e0b886f18', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 00:46:39.401946+00', ''),
	('00000000-0000-0000-0000-000000000000', '344bf64d-236c-4cac-becd-97724022d695', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-16 00:46:55.110869+00', ''),
	('00000000-0000-0000-0000-000000000000', '09f43e59-268f-4e7a-a550-0ede8859435e', '{"action":"logout","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-16 00:47:11.144018+00', ''),
	('00000000-0000-0000-0000-000000000000', '4749c192-56e8-4ead-a7b1-418f5b094a72', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 00:47:23.754567+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c488e562-7ddf-47d3-a521-b186a07b61f6', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-16 00:48:52.643655+00', ''),
	('00000000-0000-0000-0000-000000000000', 'adf34cd6-6534-45d5-82e7-a134796e9a51', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 11:19:31.530746+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bcd90aae-c08d-4705-93d3-7f6c01e16b39', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 11:19:31.533648+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf0ce346-1954-4285-815c-54d6d6243c3c', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 12:49:53.731656+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b932f5e2-719f-4d54-b432-caeb63eddfb9', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 12:49:53.734228+00', ''),
	('00000000-0000-0000-0000-000000000000', '343340cc-a326-447e-a971-540e7031cf32', '{"action":"user_recovery_requested","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 13:43:59.513316+00', ''),
	('00000000-0000-0000-0000-000000000000', '67684c4a-03a6-4c3f-987e-cefd91e473ac', '{"action":"login","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-16 13:44:15.702714+00', ''),
	('00000000-0000-0000-0000-000000000000', '1071ceca-85a4-4506-b668-dea04358c91a', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 16:07:36.716179+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dca84d83-5d17-4564-b15c-10fc3213b590', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 16:07:36.72001+00', ''),
	('00000000-0000-0000-0000-000000000000', 'af3cb918-970e-45ec-8add-8dcb78b35183', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 16:07:36.866944+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e7246ba9-d26c-486f-9400-b005bdbc576d', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 17:05:44.926234+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f7fde5d8-6ed5-4459-b1c3-ed3c1357b4d2', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-16 17:05:44.934895+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bc9df7c2-875d-4d59-bc01-0b851da718a5', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-17 00:43:00.517338+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b202fa7-956b-4906-a8bc-c67b906fc368', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-17 00:43:00.524813+00', ''),
	('00000000-0000-0000-0000-000000000000', '9ba2544e-489f-4a89-943b-aac431bb9572', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-17 06:53:29.748708+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bd09fe87-eb45-4d1c-aa39-eb4a228235a7', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-17 06:53:29.752897+00', ''),
	('00000000-0000-0000-0000-000000000000', '21d585d6-9d14-4d44-a14d-3398ba982a4b', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-17 07:51:43.878941+00', ''),
	('00000000-0000-0000-0000-000000000000', '1f132de0-c169-43fb-9cb1-df86249496d9', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-17 07:51:43.881012+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c145dcb1-9aee-43a8-95c4-59d047bdbe83', '{"action":"token_refreshed","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-17 09:10:27.010907+00', ''),
	('00000000-0000-0000-0000-000000000000', '937d5ed0-40ac-49a6-a672-a5b27ffa9952', '{"action":"token_revoked","actor_id":"8ae5bba1-5769-4070-8614-33b0b339cd3e","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-06-17 09:10:27.017868+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('ed8af4aa-793d-4806-9ee5-2bae99c74931', '8ae5bba1-5769-4070-8614-33b0b339cd3e', 'aa7bb720-e705-4ad6-a65d-7cf737673377', 's256', 'W5adsR62VpUZdZSuHteiiKLX_di44kqWL_nOwGyLIQQ', 'magiclink', '', '', '2025-06-13 01:28:39.030404+00', '2025-06-13 01:28:39.030404+00', 'magiclink', NULL),
	('ac728975-4b65-47c8-b8ce-a74e418d4e2e', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '76f47acb-a6b1-4883-8c44-afcdfa34a3f0', 's256', '48-a6yvjgZgg9_wwDaIkNOOMGMCHx4lq78mWmKE6V_Y', 'magiclink', '', '', '2025-06-13 09:54:49.314887+00', '2025-06-13 09:54:49.314887+00', 'magiclink', NULL),
	('5e65d8c6-a1c9-402c-ad12-8b0eb3bdb16d', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '5e564639-f447-4e85-b8f8-4d088448a4bc', 's256', 'ldS43UT2Pc_GhqcwZKYJ-WDBouSMHEr7fej79fxdqU4', 'magiclink', '', '', '2025-06-13 09:58:06.131282+00', '2025-06-13 09:58:06.131282+00', 'magiclink', NULL),
	('5a53e2e3-0fb8-472d-b9bb-1430c6d18869', '8ae5bba1-5769-4070-8614-33b0b339cd3e', 'bda14d20-968b-4454-8882-e29ae891306e', 's256', 'pHL7K79q0BH8WSHu9JyXWGhoT7wSfPIQ9cusM0akU80', 'magiclink', '', '', '2025-06-13 10:25:34.838927+00', '2025-06-13 10:28:47.794569+00', 'magiclink', '2025-06-13 10:28:47.7944+00'),
	('a749e0d5-c066-4cb1-89aa-c3c9d1785255', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '56fbeec2-1f06-4f88-afcf-be6599d9826a', 's256', 'NTR3c9LIv56m-OvF8Iwrvui4yUMcSUclOal7grfcuFw', 'magiclink', '', '', '2025-06-13 10:55:26.482516+00', '2025-06-13 10:55:42.885926+00', 'magiclink', '2025-06-13 10:55:42.885679+00'),
	('5b5e8609-bae8-43d5-a3ab-5b5682957c74', '8ae5bba1-5769-4070-8614-33b0b339cd3e', 'f8406dd0-4733-4e78-875c-d40f021064ce', 's256', '5kVz8VR35Rmfon9_AXRlT5Wd1aa6KW193HuzVPY1ibs', 'magiclink', '', '', '2025-06-13 10:56:24.967054+00', '2025-06-13 10:56:36.823392+00', 'magiclink', '2025-06-13 10:56:36.823222+00'),
	('f3785208-29aa-4342-b341-c00a329eaccc', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '87361c54-0a22-4a46-bdb4-2d24a89a92b8', 's256', 'E8mOx1fgjgmi0PXWefvBQ6w5Vpg29ZPcla0iLwzYshc', 'magiclink', '', '', '2025-06-13 11:54:23.083139+00', '2025-06-13 11:54:23.083139+00', 'magiclink', NULL),
	('f53f2dce-d617-4a9c-8224-ef398909c605', '8ae5bba1-5769-4070-8614-33b0b339cd3e', 'aede9c92-ab16-4a1c-9f49-7a71962ff697', 's256', 'kZ4pU1MCBHr71cYF9jjjhhMo3WG_b6eZX3bILdBVv4g', 'magiclink', '', '', '2025-06-13 12:17:24.533232+00', '2025-06-13 12:17:40.66139+00', 'magiclink', '2025-06-13 12:17:40.661241+00'),
	('67048102-1d83-4d31-811c-81b156735192', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '3369c4f7-b56b-440b-87cd-cec76a3796ac', 's256', '_zCZob77rY495dIapxbOkCJlAjOdpMa3QrjIHyzqJbY', 'magiclink', '', '', '2025-06-13 12:18:48.684721+00', '2025-06-13 12:18:56.077631+00', 'magiclink', '2025-06-13 12:18:56.07751+00'),
	('c8e5ba22-baa2-41ca-8a25-7b0226edcf89', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '469c354b-63f5-48dc-9506-53ebf5f2b000', 's256', 'I18ROuEZl8NbKp5V4Qp04tQQjk79cYptCzL_el05bRE', 'magiclink', '', '', '2025-06-13 12:26:00.734307+00', '2025-06-13 12:26:09.474415+00', 'magiclink', '2025-06-13 12:26:09.47418+00'),
	('701d815e-44f9-4898-842f-bfd5afdfaa68', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '21a10113-bfa7-4f14-9c92-d72bf6e5c58f', 's256', 'PvSGKSEVa60SYRWgGh8ZcEEPoN51eLhYh0143uGiROU', 'magiclink', '', '', '2025-06-13 13:40:56.290737+00', '2025-06-13 13:41:04.694536+00', 'magiclink', '2025-06-13 13:41:04.694351+00'),
	('6ce6b1cd-f8f1-45e1-9887-9d528f8f8700', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '6c25107a-9c70-4761-8b4a-336e6532c85c', 's256', 'DTOYRhTdS43s85hZd79qQKbT2sUw1ldyPySS_DnmiQs', 'magiclink', '', '', '2025-06-13 13:49:11.612994+00', '2025-06-13 13:49:31.463854+00', 'magiclink', '2025-06-13 13:49:31.463688+00'),
	('dbe3cda0-0a4b-4df6-8302-e3470b6574b7', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '63609953-7170-4070-90d3-8001a256ec2d', 's256', 'KZNbqZpkylvRH1nthCoOBRvVu9ZzF2UrdrXWtQHxDaA', 'magiclink', '', '', '2025-06-13 13:50:20.022998+00', '2025-06-13 13:50:57.971145+00', 'magiclink', '2025-06-13 13:50:57.970963+00'),
	('d5452596-a00c-4ffa-8fa8-08bdab3bc455', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '1f3b9c77-d28f-43f3-8587-c9a204557a7b', 's256', 'GeDxOt79fiC0gsGcwBv7Mt_K9h8lpylO-XyBlEXMnEc', 'magiclink', '', '', '2025-06-13 13:57:50.793481+00', '2025-06-13 14:01:08.928461+00', 'magiclink', '2025-06-13 14:01:08.928299+00'),
	('be14504e-727d-408a-b04e-f787a9d299f6', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '3a6c17c9-0e59-4479-ba65-00471b1129f1', 's256', 'd2Msl62thCxENknLV7Y1ijdl86jAm13_cezFPB5Gi7U', 'magiclink', '', '', '2025-06-13 15:04:13.464392+00', '2025-06-13 15:04:21.913527+00', 'magiclink', '2025-06-13 15:04:21.913414+00'),
	('c2a6be63-6463-4b5e-9e0c-475f43678dd5', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '33f5a6e1-b1f4-4e12-a4bc-5d5f3a375fd1', 's256', 'SAYzgN2_aYe2C2iikBhIxN4IEdfJaJJJpNhPED6H6aM', 'magiclink', '', '', '2025-06-13 15:20:39.791407+00', '2025-06-13 15:20:49.368033+00', 'magiclink', '2025-06-13 15:20:49.367809+00'),
	('6e9fbbd9-f286-496e-85ed-2cacd4ae52f8', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '298224e8-fb4e-464d-b256-b2371affd588', 's256', 'yPrspWETlKjr8AR35iSLUUZ6QzeoxZLG4WlWewzUnjE', 'magiclink', '', '', '2025-06-13 16:08:28.960109+00', '2025-06-13 16:08:37.578977+00', 'magiclink', '2025-06-13 16:08:37.578808+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '8ae5bba1-5769-4070-8614-33b0b339cd3e', 'authenticated', 'authenticated', 'justinjerome401@gmail.com', '$2a$10$CzIauSNRKUFUdzFmGA3vc.jdB/baDIZIi9gIUmRKARcIEuADpjq7.', '2025-06-09 16:03:25.314016+00', NULL, '', NULL, '', '2025-06-16 13:43:59.512224+00', '', '', NULL, '2025-06-16 13:44:15.722243+00', '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-06-09 16:03:25.279079+00', '2025-06-17 09:10:27.040895+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('8ae5bba1-5769-4070-8614-33b0b339cd3e', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '{"sub": "8ae5bba1-5769-4070-8614-33b0b339cd3e", "email": "justinjerome401@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-06-09 16:03:25.299817+00', '2025-06-09 16:03:25.300297+00', '2025-06-09 16:03:25.300297+00', '4fa89faa-c4d1-449d-adda-0f1733342e5f');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('8b42b917-3a3d-44d6-8b34-557ba761e640', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '2025-06-16 00:48:52.650637+00', '2025-06-16 12:49:53.744568+00', NULL, 'aal1', NULL, '2025-06-16 12:49:53.744304', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '172.20.0.1', NULL),
	('d17a1922-8adc-45a7-ab17-d2a87bb391bb', '8ae5bba1-5769-4070-8614-33b0b339cd3e', '2025-06-16 13:44:15.722543+00', '2025-06-17 09:10:27.055971+00', NULL, 'aal1', NULL, '2025-06-17 09:10:27.055434', 'Next.js Middleware', '172.20.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('8b42b917-3a3d-44d6-8b34-557ba761e640', '2025-06-16 00:48:52.657583+00', '2025-06-16 00:48:52.657583+00', 'otp', '43e80da2-b13e-4081-baae-60a7d9e1a873'),
	('d17a1922-8adc-45a7-ab17-d2a87bb391bb', '2025-06-16 13:44:15.735302+00', '2025-06-16 13:44:15.735302+00', 'otp', '1946b855-ced5-4e42-a5d2-831953265edd');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 69, 'fjcs5x5tebob', '8ae5bba1-5769-4070-8614-33b0b339cd3e', true, '2025-06-16 00:48:52.653121+00', '2025-06-16 11:19:31.539659+00', NULL, '8b42b917-3a3d-44d6-8b34-557ba761e640'),
	('00000000-0000-0000-0000-000000000000', 70, 'xin2mwqwfih7', '8ae5bba1-5769-4070-8614-33b0b339cd3e', true, '2025-06-16 11:19:31.542263+00', '2025-06-16 12:49:53.736035+00', 'fjcs5x5tebob', '8b42b917-3a3d-44d6-8b34-557ba761e640'),
	('00000000-0000-0000-0000-000000000000', 71, 'ovwatnpxfocg', '8ae5bba1-5769-4070-8614-33b0b339cd3e', false, '2025-06-16 12:49:53.737165+00', '2025-06-16 12:49:53.737165+00', 'xin2mwqwfih7', '8b42b917-3a3d-44d6-8b34-557ba761e640'),
	('00000000-0000-0000-0000-000000000000', 72, '5mpkm3rj3fhj', '8ae5bba1-5769-4070-8614-33b0b339cd3e', true, '2025-06-16 13:44:15.727199+00', '2025-06-16 16:07:36.722414+00', NULL, 'd17a1922-8adc-45a7-ab17-d2a87bb391bb'),
	('00000000-0000-0000-0000-000000000000', 73, 'vguk2aiqozyw', '8ae5bba1-5769-4070-8614-33b0b339cd3e', true, '2025-06-16 16:07:36.727654+00', '2025-06-16 17:05:44.94321+00', '5mpkm3rj3fhj', 'd17a1922-8adc-45a7-ab17-d2a87bb391bb'),
	('00000000-0000-0000-0000-000000000000', 74, 'sl2hhmyjvj5j', '8ae5bba1-5769-4070-8614-33b0b339cd3e', true, '2025-06-16 17:05:44.953568+00', '2025-06-17 00:43:00.528327+00', 'vguk2aiqozyw', 'd17a1922-8adc-45a7-ab17-d2a87bb391bb'),
	('00000000-0000-0000-0000-000000000000', 75, 'ubxp6wapydxk', '8ae5bba1-5769-4070-8614-33b0b339cd3e', true, '2025-06-17 00:43:00.624127+00', '2025-06-17 06:53:29.754657+00', 'sl2hhmyjvj5j', 'd17a1922-8adc-45a7-ab17-d2a87bb391bb'),
	('00000000-0000-0000-0000-000000000000', 76, '4em637q46gm5', '8ae5bba1-5769-4070-8614-33b0b339cd3e', true, '2025-06-17 06:53:29.759517+00', '2025-06-17 07:51:43.883063+00', 'ubxp6wapydxk', 'd17a1922-8adc-45a7-ab17-d2a87bb391bb'),
	('00000000-0000-0000-0000-000000000000', 77, 'fjhss2z3p2kx', '8ae5bba1-5769-4070-8614-33b0b339cd3e', true, '2025-06-17 07:51:43.884306+00', '2025-06-17 09:10:27.024048+00', '4em637q46gm5', 'd17a1922-8adc-45a7-ab17-d2a87bb391bb'),
	('00000000-0000-0000-0000-000000000000', 78, 'nvzuqcfuop7m', '8ae5bba1-5769-4070-8614-33b0b339cd3e', false, '2025-06-17 09:10:27.030224+00', '2025-06-17 09:10:27.030224+00', 'fjhss2z3p2kx', 'd17a1922-8adc-45a7-ab17-d2a87bb391bb');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: event_attendances; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: friendships; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "user_id", "bio", "location", "phone", "date_of_birth", "interests", "photo_url", "created_at", "updated_at") VALUES
	(3, '8ae5bba1-5769-4070-8614-33b0b339cd3e', 'My Bio', 'Oloika', '0757573984', '2000-07-12', NULL, 'No Url Now', '2025-06-17 18:52:22', '2025-06-17 18:52:31');


--
-- Data for Name: saved_events; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: tenant_members; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "name", "domain", "created_at") VALUES
	('monkeymike', 'Monkey Mike', 'monkeymike.co.ke', '2025-06-17 11:59:33+00'),
	('elephantjere', 'Elephant Jere', 'elejere.nz', '2025-06-17 10:02:29.531819+00'),
	('marombija', 'Mark Ombija', 'ombijamark.ke', '2025-06-17 10:03:22.161686+00');


--
-- Data for Name: tenant_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant_permissions" ("id", "created_at", "profile", "tenant") VALUES
	(1, '2025-06-20 11:34:59.779185+00', 3, 'elephantjere'),
	(2, '2025-06-20 11:35:41.902808+00', 3, 'monkeymike');


--
-- Data for Name: tickets; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 78, true);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."events_id_seq"', 1, false);


--
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."profiles_id_seq"', 1, false);


--
-- Name: profiles_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."profiles_id_seq1"', 3, true);


--
-- Name: tenant_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant_permissions_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
