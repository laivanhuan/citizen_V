create table declarations
(
    id         int unsigned auto_increment
        primary key,
    title      varchar(200)                        not null,
    time_start timestamp                           not null,
    time_end   timestamp                           not null,
    created_by int unsigned                        null,
    updated_by int unsigned                        null,
    created    timestamp default CURRENT_TIMESTAMP null,
    updated    timestamp default CURRENT_TIMESTAMP null,
    constraint declarations_ibfk_1
        foreign key (created_by) references users (id),
    constraint declarations_ibfk_2
        foreign key (updated_by) references users (id)
);

create index created_by
    on declarations (created_by);

create index updated_by
    on declarations (updated_by);

