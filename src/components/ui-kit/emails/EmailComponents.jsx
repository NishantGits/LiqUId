import React from 'react';

export const emails = [
  {
    id: 'welcome',
    title: 'Welcome Email',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-theme-primary rounded-full mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold">Welcome to FluidUI!</h2>
        </div>
        <p className="mb-4">Hi John,</p>
        <p className="mb-4">Thanks for signing up! We're excited to have you.</p>
        <div className="text-center my-6">
          <a href="#" className="inline-block px-6 py-3 bg-theme-primary text-white rounded-theme">Get Started</a>
        </div>
      </div>
    ),
    code: `<!-- Welcome Email Template -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Email</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
    <tr>
      <td style="padding: 40px; text-align: center;">
        <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 50%; margin: 0 auto 20px;"></div>
        <h1 style="margin: 0 0 20px; font-size: 28px; color: #111827;">Welcome to FluidUI!</h1>
        <p style="margin: 0 0 16px; color: #6b7280; font-size: 16px;">Hi John,</p>
        <p style="margin: 0 0 30px; color: #6b7280; font-size: 16px;">Thanks for signing up! We're excited to have you on board.</p>
        <a href="#" style="display: inline-block; padding: 14px 28px; background-color: #6366f1; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600;">Get Started</a>
      </td>
    </tr>
  </table>
</body>
</html>`
  },
  {
    id: 'reset-password',
    title: 'Reset Password',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
        <p className="mb-4 text-slate-600">Click the button below to reset your password.</p>
        <a href="#" className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-medium">Reset Password</a>
        <p className="mt-4 text-xs text-slate-500">This link expires in 1 hour.</p>
      </div>
    ),
    code: `<!-- Reset Password Email -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 8px; padding: 40px;">
    <tr>
      <td>
        <h1 style="margin: 0 0 20px; font-size: 24px; color: #111827;">Reset Your Password</h1>
        <p style="margin: 0 0 24px; color: #6b7280;">Click the button below to reset your password.</p>
        <a href="#" style="display: inline-block; padding: 14px 28px; background-color: #dc2626; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600;">Reset Password</a>
        <p style="margin: 24px 0 0; color: #9ca3af; font-size: 12px;">This link expires in 1 hour.</p>
      </td>
    </tr>
  </table>
</body>
</html>`
  },
  {
    id: 'receipt',
    title: 'Receipt / Invoice',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <h2 className="text-xl font-bold mb-4">Payment Receipt</h2>
        <div className="border-t border-b py-4 my-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$99.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$99.00</span>
          </div>
        </div>
        <p className="text-slate-600">Thank you for your purchase!</p>
      </div>
    ),
    code: `<!-- Receipt Email -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 40px;">
    <tr><td>
      <h1 style="margin: 0 0 24px; font-size: 24px;">Payment Receipt</h1>
      <table style="width: 100%; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; padding: 16px 0; margin: 16px 0;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280;">Subtotal</td>
          <td style="padding: 8px 0; text-align: right;">$99.00</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">Total</td>
          <td style="padding: 8px 0; text-align: right; font-weight: 600;">$99.00</td>
        </tr>
      </table>
      <p style="color: #6b7280; margin: 24px 0 0;">Thank you for your purchase!</p>
    </td></tr>
  </table>
</body>
</html>`
  },
  {
    id: 'notification',
    title: 'Notification Email',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-emerald-600">✓</span>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Action Completed</h3>
            <p className="text-slate-600">Your request was processed successfully.</p>
          </div>
        </div>
      </div>
    ),
    code: `<!-- Notification Email -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 40px;">
    <tr><td>
      <table style="width: 100%;">
        <tr>
          <td style="width: 48px; vertical-align: top;">
            <div style="width: 48px; height: 48px; background-color: #d1fae5; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <span style="color: #059669; font-size: 20px; font-weight: 600;">✓</span>
            </div>
          </td>
          <td style="padding-left: 16px;">
            <h3 style="margin: 0 0 8px; font-size: 18px; color: #111827;">Action Completed</h3>
            <p style="margin: 0; color: #6b7280;">Your request was processed successfully.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <h2 className="text-2xl font-bold mb-4">Weekly Digest</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-theme-primary pl-4">
            <h3 className="font-semibold mb-1">Article Title 1</h3>
            <p className="text-slate-600 text-xs">Brief description of the article...</p>
          </div>
          <div className="border-l-4 border-theme-primary pl-4">
            <h3 className="font-semibold mb-1">Article Title 2</h3>
            <p className="text-slate-600 text-xs">Brief description of the article...</p>
          </div>
        </div>
      </div>
    ),
    code: `<!-- Newsletter Email -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 40px;">
    <tr><td>
      <h1 style="margin: 0 0 24px; font-size: 28px; color: #111827;">Weekly Digest</h1>
      <div style="border-left: 4px solid #6366f1; padding-left: 16px; margin-bottom: 20px;">
        <h3 style="margin: 0 0 8px; font-size: 18px; color: #111827;">Article Title 1</h3>
        <p style="margin: 0; color: #6b7280; font-size: 14px;">Brief description of the article...</p>
      </div>
      <div style="border-left: 4px solid #6366f1; padding-left: 16px;">
        <h3 style="margin: 0 0 8px; font-size: 18px; color: #111827;">Article Title 2</h3>
        <p style="margin: 0; color: #6b7280; font-size: 14px;">Brief description of the article...</p>
      </div>
    </td></tr>
  </table>
</body>
</html>`
  },
  {
    id: 'verification',
    title: 'Email Verification',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <h2 className="text-xl font-bold mb-4">Verify Your Email</h2>
        <p className="mb-4 text-slate-600">Please verify your email address by entering this code:</p>
        <div className="text-center my-6">
          <div className="inline-block px-8 py-4 bg-slate-100 rounded-lg text-3xl font-mono font-bold tracking-wider">
            123456
          </div>
        </div>
        <p className="text-xs text-slate-500">Code expires in 10 minutes.</p>
      </div>
    ),
    code: `<!-- Email Verification -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 40px; text-align: center;">
    <tr><td>
      <h1 style="margin: 0 0 20px; font-size: 24px; color: #111827;">Verify Your Email</h1>
      <p style="margin: 0 0 24px; color: #6b7280;">Please verify your email address by entering this code:</p>
      <div style="display: inline-block; padding: 20px 40px; background-color: #f3f4f6; border-radius: 8px; margin: 24px 0;">
        <span style="font-size: 32px; font-family: monospace; font-weight: 700; letter-spacing: 8px; color: #111827;">123456</span>
      </div>
      <p style="margin: 24px 0 0; color: #9ca3af; font-size: 12px;">Code expires in 10 minutes.</p>
    </td></tr>
  </table>
</body>
</html>`
  },
  {
    id: 'promotional',
    title: 'Promotional Email',
    component: (
      <div className="max-w-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-lg p-6 text-sm">
        <h2 className="text-2xl font-bold mb-2">50% Off Sale!</h2>
        <p className="mb-4 opacity-90">Limited time offer. Don't miss out!</p>
        <a href="#" className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium">Shop Now</a>
      </div>
    ),
    code: `<!-- Promotional Email -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #9333ea 0%, #6366f1 100%); border-radius: 8px; padding: 40px; text-align: center;">
    <tr><td>
      <h1 style="margin: 0 0 12px; font-size: 32px; color: #ffffff;">50% Off Sale!</h1>
      <p style="margin: 0 0 24px; color: rgba(255,255,255,0.9); font-size: 16px;">Limited time offer. Don't miss out!</p>
      <a href="#" style="display: inline-block; padding: 14px 28px; background-color: #ffffff; color: #6366f1; text-decoration: none; border-radius: 8px; font-weight: 600;">Shop Now</a>
    </td></tr>
  </table>
</body>
</html>`
  },
  {
    id: 'reminder',
    title: 'Reminder Email',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <span className="text-amber-600">⏰</span>
          </div>
          <h2 className="text-xl font-bold">Upcoming Meeting</h2>
        </div>
        <p className="mb-2 text-slate-600">You have a meeting scheduled for:</p>
        <p className="font-semibold">Tomorrow at 2:00 PM</p>
      </div>
    ),
    code: `<!-- Reminder Email -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 40px;">
    <tr><td>
      <table style="margin-bottom: 20px;">
        <tr>
          <td style="width: 48px; vertical-align: middle;">
            <div style="width: 48px; height: 48px; background-color: #fef3c7; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 20px;">⏰</span>
            </div>
          </td>
          <td style="padding-left: 12px; vertical-align: middle;">
            <h2 style="margin: 0; font-size: 20px; color: #111827;">Upcoming Meeting</h2>
          </td>
        </tr>
      </table>
      <p style="margin: 0 0 12px; color: #6b7280;">You have a meeting scheduled for:</p>
      <p style="margin: 0; font-weight: 600; color: #111827;">Tomorrow at 2:00 PM</p>
    </td></tr>
  </table>
</body>
</html>`
  },
  {
    id: 'team-invite',
    title: 'Team Invitation',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <h2 className="text-xl font-bold mb-4">You're Invited!</h2>
        <p className="mb-4 text-slate-600">John Doe invited you to join their team on FluidUI.</p>
        <div className="flex gap-3">
          <a href="#" className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium">Accept</a>
          <a href="#" className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium">Decline</a>
        </div>
      </div>
    ),
    code: `<!-- Team Invitation Email -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 40px;">
    <tr><td>
      <h1 style="margin: 0 0 20px; font-size: 24px; color: #111827;">You're Invited!</h1>
      <p style="margin: 0 0 24px; color: #6b7280;">John Doe invited you to join their team on FluidUI.</p>
      <table>
        <tr>
          <td>
            <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #059669; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; margin-right: 12px;">Accept</a>
          </td>
          <td>
            <a href="#" style="display: inline-block; padding: 12px 24px; border: 1px solid #d1d5db; color: #374151; text-decoration: none; border-radius: 8px; font-weight: 600;">Decline</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
  },
  {
    id: 'feedback',
    title: 'Feedback Request',
    component: (
      <div className="max-w-lg bg-white border rounded-lg p-6 text-sm">
        <h2 className="text-xl font-bold mb-4">How was your experience?</h2>
        <p className="mb-6 text-slate-600">We'd love to hear your feedback!</p>
        <div className="flex gap-2 justify-center mb-4">
          {[1,2,3,4,5].map(n => (
            <button key={n} className="w-10 h-10 rounded-full border-2 border-slate-300 hover:border-amber-400 hover:bg-amber-50">
              ⭐
            </button>
          ))}
        </div>
      </div>
    ),
    code: `<!-- Feedback Request Email -->
<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table role="presentation" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 40px; text-align: center;">
    <tr><td>
      <h1 style="margin: 0 0 20px; font-size: 24px; color: #111827;">How was your experience?</h1>
      <p style="margin: 0 0 32px; color: #6b7280;">We'd love to hear your feedback!</p>
      <table style="margin: 0 auto;">
        <tr>
          <td style="padding: 4px;"><a href="#" style="display: inline-block; width: 48px; height: 48px; border: 2px solid #d1d5db; border-radius: 50%; text-align: center; line-height: 48px; text-decoration: none; font-size: 20px;">⭐</a></td>
          <td style="padding: 4px;"><a href="#" style="display: inline-block; width: 48px; height: 48px; border: 2px solid #d1d5db; border-radius: 50%; text-align: center; line-height: 48px; text-decoration: none; font-size: 20px;">⭐</a></td>
          <td style="padding: 4px;"><a href="#" style="display: inline-block; width: 48px; height: 48px; border: 2px solid #d1d5db; border-radius: 50%; text-align: center; line-height: 48px; text-decoration: none; font-size: 20px;">⭐</a></td>
          <td style="padding: 4px;"><a href="#" style="display: inline-block; width: 48px; height: 48px; border: 2px solid #d1d5db; border-radius: 50%; text-align: center; line-height: 48px; text-decoration: none; font-size: 20px;">⭐</a></td>
          <td style="padding: 4px;"><a href="#" style="display: inline-block; width: 48px; height: 48px; border: 2px solid #d1d5db; border-radius: 50%; text-align: center; line-height: 48px; text-decoration: none; font-size: 20px;">⭐</a></td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
  },
];