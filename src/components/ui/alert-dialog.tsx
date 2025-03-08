import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { X } from 'lucide-react';
import clsx from 'clsx';
// todo todos los componetes de ui se le cambio la libreria clsx por clsx
const clsx = clsx;

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef((props: any, ref: any) => (
    <AlertDialogPrimitive.Overlay
        ref={ref}
        className={clsx(
            'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            props.className
        )}
        {...props}
    />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef((props: any, ref: any) => (
    <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
            ref={ref}
            className={clsx(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                props.className
            )}
            {...props}
        >
            {props.children}
            //todo cambio de Close a action
            <AlertDialogPrimitive.Action className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Cerrar</span>
            </AlertDialogPrimitive.Action>
        </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = (props: any) => (
    <div
        className={clsx(
            'flex flex-col space-y-2 text-center sm:text-left',
            props.className
        )}
        {...props}
    />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = (props: any) => (
    <div
        className={clsx(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            props.className
        )}
        {...props}
    />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React.forwardRef((props: any, ref: any) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={clsx('text-lg font-semibold', props.className)}
        {...props}
    />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef((props: any, ref: any) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={clsx('text-sm text-muted-foreground', props.className)}
        {...props}
    />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

export {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
};