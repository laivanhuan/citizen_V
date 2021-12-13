create table users
(
    id          int unsigned auto_increment
        primary key,
    username    varchar(20)                         not null,
    password    varchar(150)                        not null,
    role        tinyint                             not null,
    province_id int unsigned                        null,
    district_id int unsigned                        null,
    ward_id     int unsigned                        null,
    village_id  int unsigned                        null,
    created_by  int unsigned                        null,
    updated_by  int unsigned                        null,
    created     timestamp default CURRENT_TIMESTAMP null,
    updated     timestamp default CURRENT_TIMESTAMP null,
    status      tinyint   default 1                 null,
    constraint users_ibfk_1
        foreign key (province_id) references provinces (id),
    constraint users_ibfk_2
        foreign key (district_id) references districts (id),
    constraint users_ibfk_3
        foreign key (ward_id) references wards (id),
    constraint users_ibfk_4
        foreign key (village_id) references villages (id),
    constraint users_ibfk_5
        foreign key (created_by) references users (id),
    constraint users_ibfk_6
        foreign key (updated_by) references users (id)
);

create index created_by
    on users (created_by);

create index district_id
    on users (district_id);

create index province_id
    on users (province_id);

create index updated_by
    on users (updated_by);

create index village_id
    on users (village_id);

create index ward_id
    on users (ward_id);

INSERT INTO citizenv.users (id, username, password, role, province_id, district_id, ward_id, village_id, created_by, updated_by, created, updated, status) VALUES (1, 'admin', '$2a$10$qV0SoizqPcpOq3mlNb7lyO25H9Qk1jDFi7t5/xb4DgG6EAZ9Jk7Py', 0, null, null, null, null, null, null, '2021-12-11 15:12:35', '2021-12-11 15:12:35', 1);
INSERT INTO citizenv.users (id, username, password, role, province_id, district_id, ward_id, village_id, created_by, updated_by, created, updated, status) VALUES (2, 'HN', '$2a$10$.yMuzi/4eDVYDfar6Mbkaub.tt6DkeOmdmkUuP1Y2a4vflJVPidMG', 1, 2, null, null, null, 1, 1, '2021-12-11 15:48:18', '2021-12-11 15:48:18', 1);
