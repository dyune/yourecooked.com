"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Legend } from "recharts"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const chartData = [
    { status: "applied", count: 50, fill: "var(--color-applied)" },
    { status: "rejected", count: 20, fill: "var(--color-rejected)" },
    { status: "interviewed", count: 15, fill: "var(--color-interviewed)" },
    { status: "offered", count: 5, fill: "var(--color-offered)" },
]

const chartConfig = {
    count: {
        label: "Applications",
    },
    applied: {
        label: "Applied",
        color: "hsl(var(--chart-1))",
    },
    rejected: {
        label: "Rejected",
        color: "hsl(var(--chart-2))",
    },
    interviewed: {
        label: "Interviewed",
        color: "hsl(var(--chart-3))",
    },
    offered: {
        label: "Offered",
        color: "hsl(var(--chart-4))",
    },
}

export function Pie2() {
    const totalApplications = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.count, 0)
    }, [])

    return (
        <Card className="flex flex-col text-mono">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-mono">Application Tracker</CardTitle>
                <CardDescription>Current Application Status</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={({ payload }) => {
                                if (payload && payload.length > 0) {
                                    const data = payload[0].payload
                                    return (
                                        <div className="rounded-lg bg-background p-2 shadow-md">
                                            <p className="font-semibold">{data.status}</p>
                                            <p>{data.count} applications</p>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Pie data={chartData} dataKey="count" nameKey="status" innerRadius={60} strokeWidth={5}>
                        </Pie>
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            content={({ payload }) => (
                                <div className="flex justify-center gap-4">
                                    {payload?.map((entry, index) => (
                                        <div key={`item-${index}`} className="flex items-center">
                                            <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                                            <span className="text-sm">{entry.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    5 new applications this week <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">Showing total applications and their current status</div>
            </CardFooter>
        </Card>
    )
}

