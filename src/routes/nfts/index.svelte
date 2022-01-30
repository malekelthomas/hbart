<script lang="ts">
	import type { NFT } from '$lib/models/nft';
	import Button, { Label } from '@smui/button';
	import Card, {
		Content,
		PrimaryAction,
		Media,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import IconButton, { Icon } from '@smui/icon-button';

	let nfts: NFT[] = [];
	const fetchNfts = async () => {
		nfts = await (await fetch(`http://localhost:8080/api/v1/nfts`)).json();
	};

	fetchNfts();
</script>

<h1>hbart</h1>
<div>
	{#each nfts as nft}
		<div class="card-container">
			<Card>
				<PrimaryAction>
					<Media style="background-image: url('{nft.image}')" aspectRatio="16x9" />
					<Content>
						<h2>{nft.name}</h2>
						<h3>By: {nft.creator.name}</h3>
						<div class="card-price-info">
							<h3>{nft.price}</h3>
							<div class="hbar-logo">
								<img src="hbar.webp" alt="not found" width="15px" height="15px" />
							</div>
						</div>
					</Content>
				</PrimaryAction>
				<Actions>
					<ActionButtons>
						<Button>
							<Label>Buy</Label>
						</Button>
					</ActionButtons>
					<ActionIcons>
						<IconButton toggle aria-label="Add to favorites" title="Add to favorites">
							<Icon class="material-icons" on>favorite</Icon>
							<Icon class="material-icons">favorite_border</Icon>
						</IconButton>
						<IconButton class="material-icons" title="Share">share</IconButton>
						<IconButton class="material-icons" title="More options">more_vert</IconButton>
					</ActionIcons>
				</Actions>
			</Card>
		</div>
	{/each}
</div>

<style>
	* :global(.card-display) {
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
	}
	* :global(.card-container) {
		display: inline-flex;
		align-items: center;
		min-height: 200px;
		width: 380px;
		max-width: 100%;
		overflow-x: auto;
		background-color: var(--mdc-theme-background, #f8f8f8);
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		padding: 20px;
		margin-right: 20px;
		margin-bottom: 20px;
	}
	* :global(.card-container > *) {
		margin: 0 auto;
	}
	@media (max-width: 480px) {
		* :global(.card-container) {
			margin-right: 0;
			padding-right: 0;
			padding-left: 0;
		}
	}

	.card-price-info {
		display: flex;
		justify-content: space-between;
		width: 60px;
	}

	.hbar-logo {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
