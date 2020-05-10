import Avatar from "../components/avatar";
import DateFormater from "../components/date-formater";
import Calender from "./Calender/calender";
import { AVATAR_ICON } from "../lib/constants";

export default function HeroPost() {
  const today = new Date();
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-5 text-3xl lg:text-6xl leading-tight">
            This weeks task:
          </h3>
          <div className="mb-8 md:mb-16">
            <Calender />
          </div>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormater dateString={today.toISOString()} />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold leading-relaxed my-4">
            Garbage Packing:{" "}
          </p>
          <Avatar name="Abhishek Bhattacharya" picture={AVATAR_ICON} />
          <p className="text-xl font-bold leading-relaxed my-4">
            Garbage Disposing:{" "}
          </p>
          <Avatar name="Sayantan Bhattachariya" picture={AVATAR_ICON} />
        </div>
      </div>
    </section>
  );
}
