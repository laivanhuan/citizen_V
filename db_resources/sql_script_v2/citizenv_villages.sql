create table villages
(
    id          int unsigned auto_increment
        primary key,
    name        varchar(50)                         null,
    prefix      varchar(50)                         null,
    province_id int unsigned                        null,
    district_id int unsigned                        null,
    ward_id     int unsigned                        null,
    created_by  int unsigned                        null,
    updated_by  int unsigned                        null,
    created     timestamp default CURRENT_TIMESTAMP null,
    updated     timestamp default CURRENT_TIMESTAMP null,
    constraint villages_ibfk_1
        foreign key (province_id) references provinces (id),
    constraint villages_ibfk_2
        foreign key (district_id) references districts (id),
    constraint villages_ibfk_3
        foreign key (ward_id) references wards (id),
    constraint villages_ibfk_4
        foreign key (created_by) references users (id),
    constraint villages_ibfk_5
        foreign key (updated_by) references users (id)
);

create index created_by
    on villages (created_by);

create index district_id
    on villages (district_id);

create index province_id
    on villages (province_id);

create index updated_by
    on villages (updated_by);

create index ward_id
    on villages (ward_id);

