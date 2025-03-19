"use client"

import React, { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import Link from 'next/link';
import { createAccount } from '@/lib/actions/user.actions';
import OTPModal from './OTPModal';


type Props = "sign-in" | "sign-up";

const authFormSchema = (formType: Props) => {
    return z.object({
        email: z.string().email(),
        fullname: formType === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    })
}

const AuthForm = ({ type }: { type: Props }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [accountId, setAccountId] = useState<string>("");

    // 1. Define your form.
    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: ""
        },
    });

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setErrorMessage('');
        setIsLoading(true);
        try {
            const user = await createAccount({
                fullName: values.fullname || '',
                email: values.email
            })
            setAccountId(user?.accountId)
        } catch (err) {
            console.log(err);
            setErrorMessage(err as string);
        }
        setIsLoading(false);

    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
                    <h1 className='form-title'>
                        {type === "sign-in" ? "Sign In" : "Sign Up"}
                    </h1>
                    {type === "sign-up" &&
                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='shad-form-item'>
                                        <FormLabel className='shad-form-label'>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your full name"
                                                className="shad-input"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage className='shad-form-messsage' />
                                </FormItem>
                            )}
                        />}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className='shad-form-item'>
                                    <FormLabel className='shad-form-label'>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" className='shad-input' {...field} />
                                    </FormControl>
                                </div>
                                <FormMessage className='shad-form-messsage' />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className='form-submit-button' disabled={isLoading}>
                        {type === 'sign-in' ? "Sign In" : "Sign Up"}

                        {isLoading && (
                            <Image
                                src="/assets/icons/loader.svg"
                                alt='loader'
                                width={24}
                                height={24}
                                className='animate-spin ml-2'
                            />
                        )}
                    </Button>
                    {errorMessage && <p className='error-message'>*{errorMessage}</p>}
                    <div className='body-2 flex justify-center'>
                        <p className='text-light-100'>
                            {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <Link
                            href={type === 'sign-in' ? '/sign-up' : 'sign-in'}
                            className='ml-1 font-medium text-brand'>
                            {type === 'sign-in' ? "sign Up" : "Sign In"}
                        </Link>
                    </div>
                </form>
            </Form>
            {accountId && (
                <OTPModal
                    email={form.getValues('email')}
                    accountId={accountId} />
            )}
        </>

    )
}

export default AuthForm