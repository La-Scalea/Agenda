"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "event",
      [
        {
          even_st_title:
            "Consequat qui eiusmod ullamco est sint sunt ea qui exercitation.",
          even_st_description:
            "Et culpa velit aliqua cillum consequat laboris labore ipsum. Nostrud sunt laboris dolore eiusmod elit ad aliquip id eiusmod. Mollit ea commodo Lorem dolore laboris cillum et consectetur veniam minim adipisicing ad.",
          even_dt_beginning: new Date(),
          even_dt_end: new Date(),
          user_uu_identity: "4be5be4c-00a7-4d30-939a-fb422e5537fb",
        },
        {
          even_st_title:
            "Enim labore mollit elit sint nisi tempor tempor est excepteur.",
          even_st_description:
            "In laborum anim magna sit dolore ut dolore eiusmod enim Lorem. Et //culpa velit aliqua cillum consequat laboris labore ipsum. Mollit ea commodo Lorem dolore //laboris cillum et consectetur veniam minim adipisicing ad.",
          even_dt_beginning: new Date(),
          even_dt_end: new Date(),
          user_uu_identity: "4be5be4c-00a7-4d30-939a-fb422e5537fb",
        },
        {
          even_st_title:
            "Consequat qui eiusmod ullamco est sint sunt ea qui exercitation.",
          even_st_description:
            "Et culpa velit aliqua cillum consequat laboris labore ipsum. Nostrud sunt laboris dolore eiusmod elit ad aliquip id eiusmod. Mollit ea commodo Lorem dolore laboris cillum et consectetur veniam minim adipisicing ad.",
          even_dt_beginning: new Date(),
          even_dt_end: new Date(),
          user_uu_identity: "fc1412f4-6821-48d9-87e0-55072b05a541",
        },
        {
          even_st_title:
            "Enim labore mollit elit sint nisi tempor tempor est excepteur.",
          even_st_description:
            "In laborum anim magna sit dolore ut dolore eiusmod enim Lorem. Et //culpa velit aliqua cillum consequat laboris labore ipsum. Mollit ea commodo Lorem dolore //laboris cillum et consectetur veniam minim adipisicing ad.",
          even_dt_beginning: new Date(),
          even_dt_end: new Date(),
          user_uu_identity: "fc1412f4-6821-48d9-87e0-55072b05a541",
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("event", null, {}),
};
