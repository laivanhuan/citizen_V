create table persons
(
    id              int unsigned auto_increment
        primary key,
    first_name      varchar(150)                        not null,
    last_name       varchar(150)                        not null,
    id_number       varchar(20)                         null,
    date_of_birth   timestamp                           not null,
    sex             tinyint                             not null,
    education_level int unsigned                        not null,
    married         tinyint                             not null,
    job             varchar(50)                         null,
    declaration_id  int unsigned                        not null,
    province_id     int unsigned                        not null,
    district_id     int unsigned                        not null,
    ward_id         int unsigned                        not null,
    village_id      int unsigned                        null,
    o_province_id   int unsigned                        not null,
    o_district_id   int unsigned                        not null,
    o_ward_id       int unsigned                        not null,
    o_village_id    int unsigned                        null,
    created_by      int unsigned                        null,
    updated_by      int unsigned                        null,
    created         timestamp default CURRENT_TIMESTAMP null,
    updated         timestamp default CURRENT_TIMESTAMP null,
    p_province_id   int unsigned                        not null,
    p_district_id   int unsigned                        not null,
    p_ward_id       int unsigned                        not null,
    p_village_id    int unsigned                        null,
    constraint persons_ibfk_1
        foreign key (province_id) references provinces (id),
    constraint persons_ibfk_10
        foreign key (updated_by) references users (id),
    constraint persons_ibfk_11
        foreign key (declaration_id) references declarations (id),
    constraint persons_ibfk_12
        foreign key (p_province_id) references provinces (id),
    constraint persons_ibfk_13
        foreign key (p_district_id) references districts (id),
    constraint persons_ibfk_14
        foreign key (p_ward_id) references wards (id),
    constraint persons_ibfk_15
        foreign key (p_village_id) references villages (id),
    constraint persons_ibfk_2
        foreign key (district_id) references districts (id),
    constraint persons_ibfk_3
        foreign key (ward_id) references wards (id),
    constraint persons_ibfk_4
        foreign key (village_id) references villages (id),
    constraint persons_ibfk_5
        foreign key (o_province_id) references provinces (id),
    constraint persons_ibfk_6
        foreign key (o_district_id) references districts (id),
    constraint persons_ibfk_7
        foreign key (o_ward_id) references wards (id),
    constraint persons_ibfk_8
        foreign key (o_village_id) references villages (id),
    constraint persons_ibfk_9
        foreign key (created_by) references users (id)
);

create index created_by
    on persons (created_by);

create index declaration_id
    on persons (declaration_id);

create index district_id
    on persons (district_id);

create index o_district_id
    on persons (o_district_id);

create index o_province_id
    on persons (o_province_id);

create index o_village_id
    on persons (o_village_id);

create index o_ward_id
    on persons (o_ward_id);

create index p_district_id
    on persons (p_district_id);

create index p_province_id
    on persons (p_province_id);

create index p_village_id
    on persons (p_village_id);

create index p_ward_id
    on persons (p_ward_id);

create index province_id
    on persons (province_id);

create index updated_by
    on persons (updated_by);

create index village_id
    on persons (village_id);

create index ward_id
    on persons (ward_id);

