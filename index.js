const ControllerContacts = require("./controller/contact");
const ControllerGroup = require("./controller/group");
const ControllerContactGroup = require("./controller/contact-group");
const argv = process.argv;
const command = argv[2];
const menu = argv[3];
let id, name, perusahaan, phone_number, email, contact_id, group_id;

if (!command) {
  const menu = [
    "node index contact insert <name> <perusahan> <phone_number> <email>",
    "node index contact update <id> <name> <perusahan> <phone_number> <email>",
    "node index contact delete <id>",
    "node index contact showContact",
    "node index group insert <name_group>",
    "node index group update <id> <name_group>",
    "node index group delete <id>",
    "node index group showGroup",
    "node index groupContact insert <contact_id> <group_id>",
    "node index groupContact update <id> <contact_id> <group_id>"
  ]

  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1}. ${menu[i]}`);
  }
}

if (command === "contact") {
  switch (menu) {
    case "insert":
      name = argv[4];
      perusahaan = argv[5];
      phone_number = argv[6];
      email = argv[7];
      ControllerContacts.insert(name, perusahaan, phone_number, email);
      break;
    case "update":
      id = argv[4];
      name = argv[5];
      perusahaan = argv[6];
      phone_number = argv[7];
      email = argv[8];
      ControllerContacts.update(id, name, perusahaan, phone_number, email);
      break;
    case "delete":
      id = argv[4];
      ControllerContacts.delete(id);
      break;
    case "showContact":
      ControllerContacts.showContact();
      break;
    default:
      console.log(
        "Maaf! Menu yang Anda pilih tidak tersedia. Silahkan coba lagi."
      );
  }
} else if (command === "group") {
  switch (menu) {
    case "insert":
      const nameGroup = argv[4];
      ControllerGroup.insert(nameGroup);
      break;
    case "update":
      id = argv[4];
      nameGroup = argv[5];
      ControllerGroup.update(id, nameGroup);
      break;
    case "delete":
      id = argv[4];
      ControllerGroup.delete(id);
      break;
    case "showGroup":
      ControllerGroup.showGroup();
      break;
    default:
      console.log(
        "Maaf! Menu yang Anda pilih tidak tersedia. Silahkan coba lagi."
      );
  }
} else if (command === "groupContact") {
  switch (menu) {
    case "assign":
      contact_id = argv[4];
      group_id = argv[5];
      ControllerContactGroup.insert(contact_id, group_id);
      break;
    case "update":
      id = argv[4];
      contact_id = argv[5];
      group_id = argv[6];
      ControllerContactGroup.update(id, contact_id, group_id);
      break;
    default:
      console.log(
        "Maaf! Menu yang Anda pilih tidak tersedia. Silahkan coba lagi."
      );
  }
}
