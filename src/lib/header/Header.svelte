<script>
	import { page } from '$app/stores';
	//import { token_store, user_store, error_store } from '../../store/local-store';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { base } from '$app/paths';

	//import {Nav} from 'sveltestrap'

	// this ensures localStorage is loaded, however is has a delay.
	// source: https://gist.github.com/JHethDev/7cdd180a941df0168af6e8799c406bd0
	onMount(() => {
		if (browser) {
		//	user_store.useLocalStorage();
		//	token_store.useLocalStorage();
		//	error_store.set('');
		}

		// Log it to make sure it works client side
		//console.log(localStorage.getItem('user'));
	});

	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap/src';

	$: isOpen = null;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}


</script>

<svelte:window />

<header>
	<Navbar color="light" light expand="md">
		<NavbarBrand href="/"
			>	<img src="{base + '/Logo_BEXIS_rgb_2600x830.png'}" alt="logo" width="200px"></NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate} >
			<Nav class="ms-auto" navbar>
				
				<NavItem>
					<!-- <li class="nav-item" class:active={$page.url.pathname === base + '/'}> -->
						<a sveltekit:prefetch href={base + '/'} class="nav-link">Home</a>
					<!-- </li> -->
				</NavItem>

				<!--Software-->
				<Dropdown nav inNavbar >
					<DropdownToggle nav caret>Software</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem href={base + '/software/features'}>Features</DropdownItem>
						<DropdownItem href={base + '/software/releases'}>Get Latest Version</DropdownItem>
						<DropdownItem href={base + '/software/modules'}>Modules Overview</DropdownItem>
						<DropdownItem divider />
						<DropdownItem href='https://demo.bexis2.uni-jena.de/'>Live Demo</DropdownItem>
						<DropdownItem href='https://github.com/BEXIS2'>Source Code</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Resources</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem href={base + '/resources/install'}>Installation Guide</DropdownItem>
						<DropdownItem href={base + '/resources/manuals'}>Manuals</DropdownItem>
						<DropdownItem href={base + '/resources/techtalks'}>Tech Talks</DropdownItem>
						<DropdownItem href={base + '/resources/publications'} >Publications</DropdownItem>	
						<DropdownItem href="https://fusion.cs.uni-jena.de/bppCM/index.htm" target="_blank">Conceptional Model</DropdownItem>	
					</DropdownMenu>
				</Dropdown>

				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Community</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem href={base + '/community/partnersAndInstances'}>Partners & Instances</DropdownItem>
						<DropdownItem href={base + '/community/mailinglists'}>Mailing Lists</DropdownItem>
						</DropdownMenu>
				</Dropdown>

				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>About</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem href={base + '/about/people'}>People</DropdownItem>
						<DropdownItem href={base + '/about/jobs'}>Jobs</DropdownItem>
						<DropdownItem href={base + '/about/contactus'}>Contact Us</DropdownItem>
						
						</DropdownMenu>
				</Dropdown>

			</Nav>
		</Collapse>
	</Navbar>

</header>
