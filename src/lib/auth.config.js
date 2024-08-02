export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }){
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }){
            if (session) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({auth, request}) {
            console.log(auth);

            const user = auth?.user;
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog")
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin")
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login")

            // Only admin users can reach the admin page
            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            // Only authenticated users can reach the blog page
            if (isOnBlogPage && !user) {
                return false;
            }

            // Only unauthenticated users can reach the login page
            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        }
    }
}