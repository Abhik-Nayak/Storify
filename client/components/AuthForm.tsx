"use client"

import React from 'react';
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




type Props = "sign-in" | "sign-up";

const formSchema = z.object({
    username: z.string().min(2).max(50),
})

const AuthForm = ({ type }: { type: Props }) => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
                <h1 className='form-title'>
                    {type === "sign-in" ? "Sign In" : "Sign Up"}
                </h1>
                {type === "sign-in" && <>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <div className='shad-form-item'>
                                    <FormLabel className='shad-form-label'>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your full name" className='shad-input' {...field} />
                                    </FormControl>
                                </div>
                                <FormMessage className='shad-form-messsage' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className='shad-form-item'>
                                    <FormLabel className='shad-form-label'>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" className='shad-input' {...field} />
                                    </FormControl>
                                </div>
                                <FormMessage className='shad-form-messsage' />
                            </FormItem>
                        )}
                    />
                </>}
                <Button type="submit" className='form-submit-button'>
                    {type === 'sign-in' ? "Sign In" : "Sign Up"}
                </Button>
            </form>
        </Form>
    )
}

export default AuthForm