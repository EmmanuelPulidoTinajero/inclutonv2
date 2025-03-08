import React from 'react';
import { useFormContext } from 'react-hook-form';
// Importa los componentes desde la nueva ubicación
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { FormControl, FormDescription, FormField as UIFormField, FormItem, FormLabel, FormMessage } from '../ui/form';

type FormFieldProps = {
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
    required?: boolean;
    disabled?: boolean;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' | 'textarea' | 'select';
    options?: { value: string; label: string }[];
    onChange?: (value: any) => void;
};

export function FormField({
                              name,
                              label,
                              placeholder,
                              description,
                              required = false,
                              disabled = false,
                              type = 'text',
                              options = [],
                              onChange
                          }: FormFieldProps) {
    const form = useFormContext();

    return (
        <UIFormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </FormLabel>
                    <FormControl>
                        {type === 'textarea' ? (
                            <Textarea
                                {...field}
                                placeholder={placeholder}
                                disabled={disabled}
                                className="min-h-[120px]"
                                onChange={(e) => {
                                    field.onChange(e);
                                    onChange?.(e.target.value);
                                }}
                            />
                        ) : type === 'select' ? (
                            <Select
                                {...field}
                                disabled={disabled}
                                onValueChange={(value: string) => {
                                    field.onChange(value);
                                    onChange?.(value);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                    {options.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        ) : (
                            <Input
                                {...field}
                                type={type}
                                placeholder={placeholder}
                                disabled={disabled}
                                onChange={(e) => {
                                    field.onChange(e);
                                    onChange?.(e.target.value);
                                }}
                            />
                        )}
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}