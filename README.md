<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the project

Quick and simple extension functionality for Wordpress Elementor Toggle items. Rather than using the default elementor id (e.g. #elementor-tab-title-123) or manually having to assign an ID for each item via custom javscript (because the option isn't available per item within Elementor GUI), this funtion will query all elements with the elementor-toggle class and apply an ID to each Toggle item. 

This script also accounts for:

* Leading numbers
    - HTML IDs must start with a letter, so numbers are stripped.
        - Example:
            - 1 - Details would become #details
* Special characters
    - Special characters are stripped and even though underscores, colons, and periods are allowed in HTML IDs, for consistency and simplicity, they are stripped.
        - Example:
            - 1 - Details: Event_Intro Message would become #details-event-intro-message
* Duplicates
    - HTML IDs must be unique to work. After stripping occurs, if there are duplicates, a number will be appended.
        - Exmaple:
            - 1 - Details: Event_Intro Message appears in Toggle 1 would become #details-event-intro-message-1
            - 1 - Details: Event_Intro Message appears in Toggle 2 would become #details-event-intro-message-2

## Getting Started

To get functionality up and running follow these simple steps.

### Prerequisites

* Wordpress
* Elementor
* Elementor Compatible Theme

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

1. Download this file
2. Place it in your theme's js folder. 
3. Look for this line of code within your theme's functions.php where [YOUR-THEME-NAME] could either be the theme name or something else entirely. The key here is the find a function thathas enqueue_scripts within it's name.
   If you don't find it, that's alright, keep reading.

        function [YOUR-THEME-NAME]_enqueue_scripts() {

    * If it already exists, add the code below within the function. If you do not have this function within your theme's functions.php file, keep reading.

          wp_enqueue_script(
              'open-toggle-by-hash',
              get_stylesheet_directory_uri() . '/js/openToggleByHash.js',
              ['jquery'],
              null,
              true
          );

    * If you do not have this line of code within your theme's functions.php, add the code below which includes the function itself.

          function enqueue_toggle_script() {
              wp_enqueue_script(
                  'open-toggle-by-hash',
                  get_stylesheet_directory_uri() . '/js/openToggleByHash.js',
                  ['jquery'],
                  null,
                  true
              );
          }
          
          add_action('wp_enqueue_scripts', 'enqueue_toggle_script', 20);

Nothing else is required! Both, pre-existing and new instances of Elementor Toggle items should dynamically and automatically have useable HTML IDs for anchor tags.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/leoashcraft/Personal-Family-Organizer/blob/master/LICENSE.TXT
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/leo3/

