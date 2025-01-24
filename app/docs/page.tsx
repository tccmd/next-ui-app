'use client'

import { portfolio } from "@/config/portfolio";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function DocsPage():React.ReactElement {
  return (
    <div>

      <Accordion defaultExpandedKeys={["estimate"]}>
        {Object.entries(portfolio).map(([key, value], idx) => (
          <AccordionItem key={key} aria-label={key} title={key} subtitle={value.subtitle}>
            {value.description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
