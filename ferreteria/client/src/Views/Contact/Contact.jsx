import React from "react";
import ContactForm from "../../Components/Forms/ContactForm";
import ContactSidebar from "../../Components/SideBar/SidebarContact";

const Contact = () => {
  return (
    <div class="grid grid-cols-1 ">
      <div class="col-span-1 col-span-2">
        <ContactForm />
      </div>
      <div class="col-span-1 col-span-2 ">
        <ContactSidebar />
      </div>
    </div>
  )
}

export default Contact