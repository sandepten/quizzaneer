"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpen, CopyCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  topic: z
    .string()
    .min(3, "Topic must be at least 3 characters long")
    .max(50, "Topic must be at most 50 characters long"),
  amount: z
    .number()
    .int()
    .min(1, "Amount must be at least 1")
    .max(10, "Amount must be at most 10"),
  type: z.enum(["mcq", "open-ended"]),
});

export default function QuizCreation() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      topic: "",
      amount: 1,
      type: "mcq",
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <main className="absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create a Quiz</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) =>
                alert(JSON.stringify(data, null, 2)),
              )}
              className="flex flex-col gap-6"
            >
              z
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Topic" />
                    </FormControl>
                    <FormDescription>
                      Please provide any topic you would like to create a quiz
                      on (e.g. &quot;Mathematics&quot;, &quot;Science&quot;,
                      &quot;History&quot;, etc.)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Amount"
                        onChange={(e) => {
                          field.onChange(parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Please provide the amount of questions you would like to
                      have in your quiz.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type"></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mcq">
                          <div className="flex justify-between">
                            <CopyCheck className="mr-2 h-4 w-4" />
                            <span>Multiple Choice</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="open-ended">
                          <div className="flex justify-between">
                            <BookOpen className="mr-2 h-4 w-4" />
                            <span>Open Ended</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between gap-4">
                <Button className="w-full" variant={"outline"}>
                  Cancel
                </Button>
                <Button className="w-full" type="submit">
                  Create
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
