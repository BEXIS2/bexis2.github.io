<script>
export let citeText;

let expandCite;

function expandCiteAction(e){
    console.log("Expand Cite");
    e.stopPropagation();
    expandCite = !expandCite;
}

function copy(e){
    e.stopPropagation();
    let copyText = document.getElementById("citeID");
    console.log(copyText);

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);
}

</script>



<p class="cite" on:click={expandCiteAction}>[cite]</p>
{#if expandCite}
<div class="cite-text">
    <button on:click={copy}>copy</button>
    <p  on:click={(e) => (e.stopPropagation())} id="citeID">{@html citeText}</p>
    
</div>
{/if}

<style>
    .cite{
		position: relative;
		font-weight: 400;
		color: cadetblue;
	}
    .cite:hover{
        cursor: pointer;
        font-weight: 600;
    }
	.cite-text{
		background-color: #EEEEEE;
		padding: 10px;
		border-radius: 5px;
		font-size: 12px;
	}

    .cite-text button{
        border: none;
        background-color: white;
        float: right;
    }
</style>