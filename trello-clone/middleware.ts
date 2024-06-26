import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

  //   if (auth().userId && isPublicRoute(req)) {
  //     let path = "/select-org";

  //     if (auth().orgId) {
  //       path = `/organization/${auth().orgId}`;
  //     }

  //     const orgSelection = new URL(path, req.url);
  //     return NextResponse.redirect(orgSelection);
  //   }

  //   if (!auth().userId && !isPublicRoute(req)) {
  //     return RedirectToSignIn({ returnBackUrl: req.url });
  //   }

  //   if (auth().userId && !auth().orgId && req.nextUrl.pathname !== "/select-org") {
  //     const orgSelection = new URL("/select-org", req.url);
  //     return NextResponse.redirect(orgSelection);
  //   }
  // },


