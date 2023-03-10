--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: hashtag_posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.hashtag_posts (
    id integer NOT NULL,
    post_id integer NOT NULL,
    hashtag_id integer NOT NULL
);


--
-- Name: hashtag_posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hashtag_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hashtag_posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.hashtag_posts_id_seq OWNED BY public.hashtag_posts.id;


--
-- Name: hashtags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.hashtags (
    id integer NOT NULL,
    text text NOT NULL
);


--
-- Name: hashtags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hashtags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hashtags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.hashtags_id_seq OWNED BY public.hashtags.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    post_id integer NOT NULL,
    user_id integer NOT NULL
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    description text NOT NULL,
    link text NOT NULL,
    last_update date DEFAULT now() NOT NULL
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: posts_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_user_id_seq OWNED BY public.posts.user_id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token text NOT NULL,
    created_at time without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(100) NOT NULL,
    user_name character varying(70) NOT NULL,
    image_url text NOT NULL,
    password text NOT NULL,
    created_at date DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: hashtag_posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtag_posts ALTER COLUMN id SET DEFAULT nextval('public.hashtag_posts_id_seq'::regclass);


--
-- Name: hashtags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags ALTER COLUMN id SET DEFAULT nextval('public.hashtags_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: posts user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN user_id SET DEFAULT nextval('public.posts_user_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: hashtag_posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.hashtag_posts VALUES (1, 3, 1);
INSERT INTO public.hashtag_posts VALUES (2, 3, 2);


--
-- Data for Name: hashtags; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.hashtags VALUES (1, 'mec');
INSERT INTO public.hashtags VALUES (2, 'top');
INSERT INTO public.hashtags VALUES (3, 'fresh');


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.likes VALUES (2, 3, 29);
INSERT INTO public.likes VALUES (3, 5, 29);
INSERT INTO public.likes VALUES (4, 3, 30);
INSERT INTO public.likes VALUES (5, 3, 30);
INSERT INTO public.likes VALUES (23, 9, 29);
INSERT INTO public.likes VALUES (25, 7, 28);
INSERT INTO public.likes VALUES (26, 9, 28);
INSERT INTO public.likes VALUES (30, 10, 28);
INSERT INTO public.likes VALUES (31, 4, 28);
INSERT INTO public.likes VALUES (32, 6, 28);
INSERT INTO public.likes VALUES (33, 8, 28);
INSERT INTO public.likes VALUES (34, 3, 28);


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.posts VALUES (2, 1, 'iasuhye', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-07');
INSERT INTO public.posts VALUES (1, 1, 'iasuhye', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-07');
INSERT INTO public.posts VALUES (3, 28, 'iasuhye', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-07');
INSERT INTO public.posts VALUES (4, 28, 'iasuhye', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-07');
INSERT INTO public.posts VALUES (5, 29, 'iasuhye', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-07');
INSERT INTO public.posts VALUES (6, 28, 'poiasdd asidoa ijsd', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-09');
INSERT INTO public.posts VALUES (7, 28, 'poiasdd asidoa ijsd', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-09');
INSERT INTO public.posts VALUES (8, 28, 'poiasdd asidoa ijsd', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-09');
INSERT INTO public.posts VALUES (9, 28, 'poiasdd asidoa ijsd', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-09');
INSERT INTO public.posts VALUES (10, 28, 'Link tpo', 'https://www.estadao.com.br/politica/veja-o-que-diz-a-lei-e-quais-crimes-bolsonaro-pode-ter-cometido-no-caso-das-joias-da-arabia-saudita/', '2023-03-09');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (35, 28, '858d24ca-76ac-4c73-9fcb-e942d3475401', '17:13:42.477563');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'danniel@gmail.com', 'danniel', 'aiosje', '123456', '2023-03-07');
INSERT INTO public.users VALUES (2, 'danniel2@gmail.com', 'danniel2', 'aiosje', '123456', '2023-03-07');
INSERT INTO public.users VALUES (3, 'danniel3@gmail.com', 'danniel3', 'aiosje', '123456', '2023-03-07');
INSERT INTO public.users VALUES (28, 'danniel4@gmail.com', 'danniel4', 'https://cdn.pixabay.com/photo/2023/01/11/18/26/bird-7712475_960_720.jpg', '$2b$10$qafgCWAB7hYlFz2Qjkobz.3nW4GddcyaawppBy59YGfaCg97iZLti', '2023-03-07');
INSERT INTO public.users VALUES (29, 'danniel5@gmail.com', 'danniel5', 'https://cdn.pixabay.com/photo/2023/01/11/18/26/bird-7712475_960_720.jpg', '$2b$10$8qee1g9JKI3pchyAh517a./5C170txf/614AgrPDRY7CnC4v4lW12', '2023-03-07');
INSERT INTO public.users VALUES (30, 'danniel6@gmail.com', 'danniel6', 'https://cdn.pixabay.com/photo/2023/01/11/18/26/bird-7712475_960_720.jpg', '$2b$10$TVwz1PtJ9/HWehVJGA.kq.5Tu1vgl.cBeTaGr2vQBeHMoIg9Rw2gq', '2023-03-07');
INSERT INTO public.users VALUES (31, 'danniel7@gmail.com', 'danniel7', 'https://cdn.pixabay.com/photo/2023/01/11/18/26/bird-7712475_960_720.jpg', '$2b$10$EzDVmzrKhhR0Qc3D0p.equnn6JaytH9HJvreB1wWwQParAFI49hne', '2023-03-07');


--
-- Name: hashtag_posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.hashtag_posts_id_seq', 2, true);


--
-- Name: hashtags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.hashtags_id_seq', 3, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 34, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 10, true);


--
-- Name: posts_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_user_id_seq', 1, false);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 35, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 31, true);


--
-- Name: hashtag_posts hashtag_posts_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtag_posts
    ADD CONSTRAINT hashtag_posts_pk PRIMARY KEY (id);


--
-- Name: hashtags hashtags_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_pk PRIMARY KEY (id);


--
-- Name: hashtags hashtags_text_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_text_key UNIQUE (text);


--
-- Name: likes likes_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pk PRIMARY KEY (id);


--
-- Name: posts posts_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: sessions sessions_user_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_key UNIQUE (user_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: users users_user_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_name_key UNIQUE (user_name);


--
-- Name: hashtag_posts hashtag_posts_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtag_posts
    ADD CONSTRAINT hashtag_posts_fk0 FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: hashtag_posts hashtag_posts_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtag_posts
    ADD CONSTRAINT hashtag_posts_fk1 FOREIGN KEY (hashtag_id) REFERENCES public.hashtags(id);


--
-- Name: likes likes_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_fk0 FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: likes likes_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_fk1 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: posts posts_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: sessions sessions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

