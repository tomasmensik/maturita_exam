-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Počítač: localhost:3307
-- Vytvořeno: Sob 17. pro 2022, 10:47
-- Verze serveru: 10.4.25-MariaDB
-- Verze PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `maturita`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `app_assessement`
--

CREATE TABLE `app_assessement` (
  `id` bigint(20) NOT NULL,
  `as_percent` double DEFAULT NULL,
  `as_mark` varchar(1) NOT NULL,
  `project_id_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `app_assessement`
--

INSERT INTO `app_assessement` (`id`, `as_percent`, `as_mark`, `project_id_id`) VALUES
(1, 100, '1', 1);

-- --------------------------------------------------------

--
-- Struktura tabulky `app_issues`
--

CREATE TABLE `app_issues` (
  `id` bigint(20) NOT NULL,
  `issue_name` varchar(45) NOT NULL,
  `is_done` tinyint(1) NOT NULL,
  `issue_detail` longtext NOT NULL,
  `class_image` varchar(100) DEFAULT NULL,
  `deadline` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `app_issues`
--

INSERT INTO `app_issues` (`id`, `issue_name`, `is_done`, `issue_detail`, `class_image`, `deadline`) VALUES
(1, 'vytvorit model', 0, 'vytvoreni databaze', '', '2022-12-30');

-- --------------------------------------------------------

--
-- Struktura tabulky `app_issues_class`
--

CREATE TABLE `app_issues_class` (
  `id` bigint(20) NOT NULL,
  `issues_class_name` varchar(45) NOT NULL,
  `issues_class_color` varchar(45) NOT NULL,
  `class_detail` longtext NOT NULL,
  `class_image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `app_issues_class`
--

INSERT INTO `app_issues_class` (`id`, `issues_class_name`, `issues_class_color`, `class_detail`, `class_image`) VALUES
(1, 'django', 'rgb(255,255,255)', 'djanog', '');

-- --------------------------------------------------------

--
-- Struktura tabulky `app_issues_class_issues_class`
--

CREATE TABLE `app_issues_class_issues_class` (
  `id` bigint(20) NOT NULL,
  `issues_class_id` bigint(20) NOT NULL,
  `issues_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `app_issues_class_issues_class`
--

INSERT INTO `app_issues_class_issues_class` (`id`, `issues_class_id`, `issues_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Struktura tabulky `app_profile`
--

CREATE TABLE `app_profile` (
  `id` bigint(20) NOT NULL,
  `bio` longtext NOT NULL,
  `birth_date` date DEFAULT NULL,
  `profile_git` varchar(200) NOT NULL,
  `profile_time` time(6) DEFAULT NULL,
  `profile_foto` varchar(100) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `id_profile` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `app_profile`
--

INSERT INTO `app_profile` (`id`, `bio`, `birth_date`, `profile_git`, `profile_time`, `profile_foto`, `user_id`, `id_profile`) VALUES
(1, 'https://github.com/', '2022-12-13', 'https://github.com/', '18:52:45.000000', '', 4, 'ii1926');

-- --------------------------------------------------------

--
-- Struktura tabulky `app_profile_profile_project`
--

CREATE TABLE `app_profile_profile_project` (
  `id` bigint(20) NOT NULL,
  `profile_id` bigint(20) NOT NULL,
  `project_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabulky `app_project`
--

CREATE TABLE `app_project` (
  `id` bigint(20) NOT NULL,
  `pro_name` varchar(45) NOT NULL,
  `pro_description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `app_project`
--

INSERT INTO `app_project` (`id`, `pro_name`, `pro_description`) VALUES
(1, 'maturitaMaker', 'projekt na vytvareni dalsich projektu');

-- --------------------------------------------------------

--
-- Struktura tabulky `app_project_project_issue_call`
--

CREATE TABLE `app_project_project_issue_call` (
  `id` bigint(20) NOT NULL,
  `project_id` bigint(20) NOT NULL,
  `issues_class_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabulky `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `auth_group`
--

INSERT INTO `auth_group` (`id`, `name`) VALUES
(1, 'admin');

-- --------------------------------------------------------

--
-- Struktura tabulky `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `auth_group_permissions`
--

INSERT INTO `auth_group_permissions` (`id`, `group_id`, `permission_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(17, 1, 17),
(18, 1, 18),
(19, 1, 19),
(20, 1, 20),
(21, 1, 21),
(22, 1, 22),
(23, 1, 23),
(24, 1, 24),
(25, 1, 25),
(26, 1, 26),
(27, 1, 27),
(28, 1, 28),
(29, 1, 29),
(30, 1, 30),
(31, 1, 31),
(32, 1, 32),
(33, 1, 33),
(34, 1, 34),
(35, 1, 35),
(36, 1, 36),
(37, 1, 37),
(38, 1, 38),
(39, 1, 39),
(40, 1, 40),
(41, 1, 41),
(42, 1, 42),
(43, 1, 43),
(44, 1, 44);

-- --------------------------------------------------------

--
-- Struktura tabulky `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add project', 7, 'add_project'),
(26, 'Can change project', 7, 'change_project'),
(27, 'Can delete project', 7, 'delete_project'),
(28, 'Can view project', 7, 'view_project'),
(29, 'Can add profile', 8, 'add_profile'),
(30, 'Can change profile', 8, 'change_profile'),
(31, 'Can delete profile', 8, 'delete_profile'),
(32, 'Can view profile', 8, 'view_profile'),
(33, 'Can add issue s_class', 9, 'add_issues_class'),
(34, 'Can change issue s_class', 9, 'change_issues_class'),
(35, 'Can delete issue s_class', 9, 'delete_issues_class'),
(36, 'Can view issue s_class', 9, 'view_issues_class'),
(37, 'Can add issues', 10, 'add_issues'),
(38, 'Can change issues', 10, 'change_issues'),
(39, 'Can delete issues', 10, 'delete_issues'),
(40, 'Can view issues', 10, 'view_issues'),
(41, 'Can add assessement', 11, 'add_assessement'),
(42, 'Can change assessement', 11, 'change_assessement'),
(43, 'Can delete assessement', 11, 'delete_assessement'),
(44, 'Can view assessement', 11, 'view_assessement');

-- --------------------------------------------------------

--
-- Struktura tabulky `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(3, 'pbkdf2_sha256$390000$GszRdb2qMX7ERi9pSdVCgn$RJVKnGNRUJXwfO9FKqo+FRIeJ6vZ0m+KF/Yy+a1rP08=', '2022-12-13 18:32:55.410899', 1, 'slivka', 'Jan', 'Slivka', 'janslivka44@seznam.cz', 1, 1, '2022-11-26 10:46:17.000000'),
(4, 'pbkdf2_sha256$390000$PeyX1rYAb0bNAYfbtVMlZ5$efjOOeQpgXPguLL0dJ5qz03SLs6zznQaO9B5JWm80v8=', NULL, 0, 'hans', 'Jan', 'Slivka', 'jan.slivka.workspace@seznam.cz', 0, 1, '2022-12-13 18:33:30.000000');

-- --------------------------------------------------------

--
-- Struktura tabulky `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `auth_user_groups`
--

INSERT INTO `auth_user_groups` (`id`, `user_id`, `group_id`) VALUES
(2, 3, 1),
(3, 4, 1);

-- --------------------------------------------------------

--
-- Struktura tabulky `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabulky `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(12, '2022-11-26 10:48:51.240164', '3', 'slivka', 2, '[{\"changed\": {\"fields\": [\"Username\", \"Email address\"]}}]', 4, 3),
(13, '2022-11-26 10:52:23.856086', '1', 'Maturita Maker', 1, '[{\"added\": {}}]', 7, 3),
(14, '2022-11-26 10:52:27.937847', '6', 'Jan Slivka', 2, '[{\"changed\": {\"fields\": [\"Projekt\"]}}]', 8, 3),
(15, '2022-11-26 10:54:44.733148', '1', 'vytvoreni databaze', 1, '[{\"added\": {}}]', 9, 3),
(16, '2022-12-13 18:33:30.234928', '4', 'hans', 1, '[{\"added\": {}}]', 4, 3),
(17, '2022-12-13 18:34:17.569595', '4', 'hans', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Groups\"]}}]', 4, 3),
(18, '2022-12-13 18:52:15.291808', '1', 'maturitaMaker', 1, '[{\"added\": {}}]', 7, 3),
(19, '2022-12-13 18:52:48.113325', '1', 'Jan Slivka', 1, '[{\"added\": {}}]', 8, 3),
(20, '2022-12-13 18:57:10.456170', '1', 'maturitaMaker známka: 1', 1, '[{\"added\": {}}]', 11, 3),
(21, '2022-12-13 19:01:50.723390', '1', 'django', 1, '[{\"added\": {}}]', 9, 3),
(22, '2022-12-13 19:03:08.363375', '1', 'vytvorit model', 1, '[{\"added\": {}}]', 10, 3),
(23, '2022-12-13 19:03:12.135461', '1', 'django', 2, '[{\"changed\": {\"fields\": [\"Issues\"]}}]', 9, 3),
(24, '2022-12-13 19:06:36.571458', '1', 'Jan Slivka', 2, '[{\"changed\": {\"fields\": [\"Priklad:it1987\"]}}]', 8, 3);

-- --------------------------------------------------------

--
-- Struktura tabulky `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(11, 'app', 'assessement'),
(10, 'app', 'issues'),
(9, 'app', 'issues_class'),
(8, 'app', 'profile'),
(7, 'app', 'project'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Struktura tabulky `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-11-26 10:32:38.192874'),
(2, 'auth', '0001_initial', '2022-11-26 10:32:38.613734'),
(3, 'admin', '0001_initial', '2022-11-26 10:32:38.716255'),
(4, 'admin', '0002_logentry_remove_auto_add', '2022-11-26 10:32:38.724256'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-11-26 10:32:38.733258'),
(7, 'contenttypes', '0002_remove_content_type_name', '2022-11-26 10:32:39.155200'),
(8, 'auth', '0002_alter_permission_name_max_length', '2022-11-26 10:32:39.196488'),
(9, 'auth', '0003_alter_user_email_max_length', '2022-11-26 10:32:39.217498'),
(10, 'auth', '0004_alter_user_username_opts', '2022-11-26 10:32:39.226489'),
(11, 'auth', '0005_alter_user_last_login_null', '2022-11-26 10:32:39.266020'),
(12, 'auth', '0006_require_contenttypes_0002', '2022-11-26 10:32:39.270030'),
(13, 'auth', '0007_alter_validators_add_error_messages', '2022-11-26 10:32:39.280020'),
(14, 'auth', '0008_alter_user_username_max_length', '2022-11-26 10:32:39.302642'),
(15, 'auth', '0009_alter_user_last_name_max_length', '2022-11-26 10:32:39.320547'),
(16, 'auth', '0010_alter_group_name_max_length', '2022-11-26 10:32:39.338559'),
(17, 'auth', '0011_update_proxy_permissions', '2022-11-26 10:32:39.352561'),
(18, 'auth', '0012_alter_user_first_name_max_length', '2022-11-26 10:32:39.371553'),
(19, 'sessions', '0001_initial', '2022-11-26 10:32:39.403086'),
(20, 'app', '0002_remove_profile_user', '2022-11-26 10:34:08.726158'),
(21, 'app', '0003_profile_user', '2022-11-26 10:35:04.500053'),
(22, 'app', '0004_remove_profile_profile_name_and_more', '2022-11-26 10:38:33.139506'),
(23, 'app', '0005_profile_profile_project', '2022-11-26 10:51:42.700269'),
(24, 'app', '0006_remove_issues_class_project_id_and_more', '2022-11-26 10:58:12.849674'),
(25, 'app', '0007_remove_issues_issues_class_issues_class_issues_class_and_more', '2022-11-27 17:36:03.047398'),
(26, 'app', '0001_initial', '2022-12-13 18:49:37.008124'),
(27, 'app', '0002_alter_project_project_issue_call', '2022-12-13 18:51:38.349591'),
(28, 'app', '0003_alter_assessement_project_id', '2022-12-13 18:54:45.510497'),
(29, 'app', '0004_alter_assessement_as_percent', '2022-12-13 18:56:25.580620'),
(30, 'app', '0005_issues_deadline', '2022-12-13 19:00:51.043560'),
(31, 'app', '0006_alter_issues_class_issues_class', '2022-12-13 19:01:37.598332'),
(32, 'app', '0007_profile_id_profile', '2022-12-13 19:06:08.495544');

-- --------------------------------------------------------

--
-- Struktura tabulky `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vypisuji data pro tabulku `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('33zl7hkiwhvcnzd4d29tplc0qrjswbln', '.eJxVjMEOwiAQRP-FsyG4UCgevfsNZBcWqRqalPZk_Hdp0oMeZ96beYuA21rC1ngJUxIXocXptyOMT647SA-s91nGua7LRHJX5EGbvM2JX9fD_Tso2Epfu-hHYpUpIZNxYJnYZk6DsV5bAE-RwWul0KiegEc3sFfnLmsAncXnCwCaN9Y:1oysiP:s0Tzd-qh_WswmBG7L0xfv0KVO7QNYP2uoe954PFIOpA', '2022-12-10 10:47:21.795261'),
('pujepqapbs4mw6lc5qq6gw2azi79yn4d', '.eJxVjMEOwiAQRP-FsyG4UCgevfsNZBcWqRqalPZk_Hdp0oMeZ96beYuA21rC1ngJUxIXocXptyOMT647SA-s91nGua7LRHJX5EGbvM2JX9fD_Tso2Epfu-hHYpUpIZNxYJnYZk6DsV5bAE-RwWul0KiegEc3sFfnLmsAncXnCwCaN9Y:1p5A5H:-NTt_-YxvAuJD2YR6DsgsTixfDF1wqfHTNOffkE9FKI', '2022-12-27 18:32:55.413902');

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `app_assessement`
--
ALTER TABLE `app_assessement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `app_assessement_project_id_id_5c171ec6_fk_app_project_id` (`project_id_id`);

--
-- Indexy pro tabulku `app_issues`
--
ALTER TABLE `app_issues`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `app_issues_class`
--
ALTER TABLE `app_issues_class`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `app_issues_class_issues_class`
--
ALTER TABLE `app_issues_class_issues_class`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `app_issues_class_issues__issues_class_id_issues_i_ed8a1796_uniq` (`issues_class_id`,`issues_id`),
  ADD KEY `app_issues_class_iss_issues_id_0703012a_fk_app_issue` (`issues_id`);

--
-- Indexy pro tabulku `app_profile`
--
ALTER TABLE `app_profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexy pro tabulku `app_profile_profile_project`
--
ALTER TABLE `app_profile_profile_project`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `app_profile_profile_project_profile_id_project_id_0073db62_uniq` (`profile_id`,`project_id`),
  ADD KEY `app_profile_profile__project_id_86a07e2e_fk_app_proje` (`project_id`);

--
-- Indexy pro tabulku `app_project`
--
ALTER TABLE `app_project`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `app_project_project_issue_call`
--
ALTER TABLE `app_project_project_issue_call`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `app_project_project_issu_project_id_issues_class__a99c02eb_uniq` (`project_id`,`issues_class_id`),
  ADD KEY `app_project_project__issues_class_id_f14f768e_fk_app_issue` (`issues_class_id`);

--
-- Indexy pro tabulku `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexy pro tabulku `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexy pro tabulku `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexy pro tabulku `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexy pro tabulku `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexy pro tabulku `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexy pro tabulku `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexy pro tabulku `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexy pro tabulku `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `app_assessement`
--
ALTER TABLE `app_assessement`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `app_issues`
--
ALTER TABLE `app_issues`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `app_issues_class`
--
ALTER TABLE `app_issues_class`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `app_issues_class_issues_class`
--
ALTER TABLE `app_issues_class_issues_class`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `app_profile`
--
ALTER TABLE `app_profile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `app_profile_profile_project`
--
ALTER TABLE `app_profile_profile_project`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `app_project`
--
ALTER TABLE `app_project`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `app_project_project_issue_call`
--
ALTER TABLE `app_project_project_issue_call`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pro tabulku `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pro tabulku `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pro tabulku `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pro tabulku `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pro tabulku `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `app_assessement`
--
ALTER TABLE `app_assessement`
  ADD CONSTRAINT `app_assessement_project_id_id_5c171ec6_fk_app_project_id` FOREIGN KEY (`project_id_id`) REFERENCES `app_project` (`id`);

--
-- Omezení pro tabulku `app_issues_class_issues_class`
--
ALTER TABLE `app_issues_class_issues_class`
  ADD CONSTRAINT `app_issues_class_iss_issues_class_id_ffeb7d1f_fk_app_issue` FOREIGN KEY (`issues_class_id`) REFERENCES `app_issues_class` (`id`),
  ADD CONSTRAINT `app_issues_class_iss_issues_id_0703012a_fk_app_issue` FOREIGN KEY (`issues_id`) REFERENCES `app_issues` (`id`);

--
-- Omezení pro tabulku `app_profile`
--
ALTER TABLE `app_profile`
  ADD CONSTRAINT `app_profile_user_id_87d292a0_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Omezení pro tabulku `app_profile_profile_project`
--
ALTER TABLE `app_profile_profile_project`
  ADD CONSTRAINT `app_profile_profile__profile_id_cdee339d_fk_app_profi` FOREIGN KEY (`profile_id`) REFERENCES `app_profile` (`id`),
  ADD CONSTRAINT `app_profile_profile__project_id_86a07e2e_fk_app_proje` FOREIGN KEY (`project_id`) REFERENCES `app_project` (`id`);

--
-- Omezení pro tabulku `app_project_project_issue_call`
--
ALTER TABLE `app_project_project_issue_call`
  ADD CONSTRAINT `app_project_project__issues_class_id_f14f768e_fk_app_issue` FOREIGN KEY (`issues_class_id`) REFERENCES `app_issues_class` (`id`),
  ADD CONSTRAINT `app_project_project__project_id_5cd47fbb_fk_app_proje` FOREIGN KEY (`project_id`) REFERENCES `app_project` (`id`);

--
-- Omezení pro tabulku `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Omezení pro tabulku `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Omezení pro tabulku `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Omezení pro tabulku `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Omezení pro tabulku `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
