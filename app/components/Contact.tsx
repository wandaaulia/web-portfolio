import { contactInfo, contactTitle } from "../data/contact";

export default function Contact() {

  return (
    <div className="mt-3 pb-6 text-base m-0">
      <h4 className="text-gray-300 mb-2 text-xl"> {contactTitle} </h4>
      <ul className="text-gray-300 flex flex-col text-base gap-2">
        {contactInfo.map((item, index) => (
          <li key={index} className="flex flex-row items-center gap-2">
            {item.icon} {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
