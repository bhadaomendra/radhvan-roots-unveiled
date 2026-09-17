# Cultivation Training Structured Data Setup

## Goal
Make `/cultivation-training` eligible for Google to understand it as a real Radhvan Origins course and show a valid breadcrumb path, while keeping every structured-data claim consistent with visible page content.

## What will change
1. Add a visible breadcrumb above the training page heading: **Home → Cultivation Training**.
2. Replace the current minimal JSON-LD with one connected graph containing:
   - `Course` with a stable page ID, URL, name, description, two-day duration, beginner audience, English language, syllabus topics, certificate outcome, and Radhvan Origins as provider.
   - `CourseInstance` for the verified offline Jaipur format, 2-day duration, 10–12 participant batch size, and enquiry/registration URL.
   - `EducationalOrganization` with canonical URL and contact details already published on the site.
   - `Place` and Jaipur postal locality details without inventing an unpublished street address.
   - `BreadcrumbList` for Home → Cultivation Training.
   - Existing `FAQPage`, kept aligned with visible questions and answers.
3. Give schema entities stable `@id` references so Google can connect the course, provider, place, page, and breadcrumbs.
4. Update the standalone `cultivation-training.html` JSON-LD used by the FTP/static deployment so it matches the route data and does not regress after publishing.
5. Add an automated validation check for JSON syntax and the required Course/Breadcrumb properties in both delivery paths.

## Accuracy limits
- No batch dates, fee, street address, availability, or price offer will be invented.
- A dated `CourseInstance` and monetary `Offer` will be added later only when real batch details are supplied.
- Structured data improves eligibility; Google decides whether and how a rich result appears and does not guarantee a course listing.

## Verification
- Confirm the visible breadcrumb matches the JSON-LD breadcrumb.
- Parse both JSON-LD outputs successfully.
- Verify the live-rendered page contains one H1 and the Course, CourseInstance, EducationalOrganization, Place, BreadcrumbList, and FAQPage entities.
- Confirm desktop and mobile layouts remain unchanged except for the new breadcrumb row.
