"use client";

import React from 'react';
import { socials } from '@/consts';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div id='contact' className='p-6 bg-secondary lg:px-8'>
      <div className='flex justify-center items-center text-center mb-2'>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
        <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">Contact me</h1>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
      </div>

      <div className='flex justify-center items-center mt-6'>
        {/* email */}
        
        <ProfileForm />
      </div>

      <div className='flex justify-center items-center gap-2 mt-6'>
        {socials.map((social) => (
          <a 
            key={social.name} 
            href={social.url} 
            className='p-2 border-2 border-solid border-white rounded-md'
          >
            <img src={social.icon} alt={social.name} className='h-7' />
          </a>
        ))}
      </div>
    </div>
  );
}


// Contact me form
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"

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
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, { message: "Email must be at least 2 characters." })
    .email(),
  message: z.string().min(2, { message: "Message must be at least 2 characters." }),
})

type FormData = z.infer<typeof formSchema>

export function ProfileForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
 
  function onSubmit(formData: FormData) {
    console.log(formData);

    setIsLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    fetch("https://formsubmit.co/tylerbeadle658@gmail.com", {
      method: "POST",
      body: data,
    })
    .then((response) => {
      if (response.ok) {
        setIsLoading(false);
      } else {
        alert('Failed to send message.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error sending message.');
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full md:w-3/5">
        <input type="hidden" name="_template" value="basic" />
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="tbech@email.me" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="I want to work with you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex justify-between items-center'>
          <h4 className='flex items-center'>
            <Mail size={24} className='mr-1' />
            tylerbeadle658@gmail.com
          </h4>

          <Button type="submit">{isLoading ? "Sending..." : "Send" }</Button>
        </div>
      </form>
    </Form>
  )
}