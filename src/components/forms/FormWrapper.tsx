
import React, { ReactNode } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

type FormWrapperProps = {
    children: ReactNode;
    title: string;
    description?: string;
    error?: string;
    success?: string;
};

export function FormWrapper({
                                children,
                                title,
                                description,
                                error,
                                success
                            }: FormWrapperProps) {
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-3">{title}</h1>
                {description && (
                    <p className="text-gray-600">{description}</p>
                )}

                {error && (
                    <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
                        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{error}</span>
                    </div>
                )}

                {success && (
                    <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{success}</span>
                    </div>
                )}
            </div>
            {children}
        </div>
    );
}