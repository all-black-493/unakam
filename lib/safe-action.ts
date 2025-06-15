import { createSafeActionClient } from "next-safe-action"

export const actionClient = createSafeActionClient({
    handleServerError(e) {
        console.error("Action error:", e)

        if (e.message.includes("UNAUTHORIZED")) {
            return "You must be logged in to perform this action"
        }

        if (e.message.includes("FORBIDDEN")) {
            return "You don't have permission to perform this action"
        }

        if (e.message.includes("NOT_FOUND")) {
            return "The requested resource was not found"
        }

        return "An unexpected error occurred"
    },
})

export const authActionClient = actionClient.use(async ({ next }) => {
    const userId = "550e8400-e29b-41d4-a716-446655440001"
    const tenantId = "550e8400-e29b-41d4-a716-446655440000"

    if (!userId) {
        throw new Error("UNAUTHORIZED")
    }

    return next({
        ctx: {
            userId,
            tenantId,
        },
    })
})

export const adminActionClient = authActionClient.use(async ({ next, ctx }) => {
    const userRole = "admin"   
    if (userRole !== "admin") {
        throw new Error("FORBIDDEN")
    }

    return next({
        ctx: {
            ...ctx,
            isAdmin: true,
        },
    })
})

export const tenantActionClient = authActionClient.use(async ({ next, ctx }) => {
    return next({
        ctx: {
            ...ctx,
            tenantId: ctx.tenantId,
        },
    })
})
