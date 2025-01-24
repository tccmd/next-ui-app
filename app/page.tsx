import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Divider } from "@nextui-org/divider";
import TimeLine from "@/components/timeLine";
import { Spacer } from "@nextui-org/spacer";
import NotificationsStack from "@/components/notif";
import Parallax from "@/components/ScrollMotion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Parallax />
        {/* <PathDrawing /> */}
        {/* <NotificationsStack /> */}
        {/* <TimeLine /> */}
        </div>
    </section>
  );
}
