import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef((props: any, ref: any) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={clsx('border-b', props.className)}
        {...props}
    />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef((props: any, ref: any) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={clsx(
                'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
                props.className
            )}
            {...props}
        >
            {props.children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef((props: any, ref: any) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={clsx('pb-4 pt-0', props.className)}>{props.children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };